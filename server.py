from wsgiref.simple_server import make_server
import os
import mimetypes
import mysql.connector
import urllib.parse
import hashlib

MYSQL_PASSWORD = os.environ.get("MYSQL_PASSWORD")
BASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")

def serve_static(path):

    if path == "/":
        path = "/index.html"

    ruta = os.path.join(BASE_DIR, path.lstrip("/"))

    if os.path.exists(ruta) and os.path.isfile(ruta):
        tipo_mime, _ = mimetypes.guess_type(ruta)
        if not tipo_mime:
            tipo_mime = "application/octet-stream"
        
        with open(ruta, "rb") as f:
            contenido = f.read()
        return contenido, tipo_mime
    else:
        return None, None

def conectar_db():
    return mysql.connector.connect(
        host="alejndmp.mysql.pythonanywhere-services.com",
        user="alejndmp",
        password=MYSQL_PASSWORD,
        database="socios"
    )

def application(environ, start_response):
    path = environ.get("PATH_INFO", "/")

    if environ["REQUEST_METHOD"] == "POST" and path == "/guardar":
        try:
            size = int(environ.get("CONTENT_LENGTH", 0))
            body = environ["wsgi.input"].read(size).decode("utf-8")
            data = urllib.parse.parse_qs(body)

            def get(campo):
                return data.get(campo, [""])[0]
            print("POST RECIBIDO:", data)

            password_hash = hashlib.sha256(get("contraseña").encode("utf-8")).hexdigest()
            conn = conectar_db()
            cursor = conn.cursor()

            sql = """
            INSERT INTO usuarios (
                nombres, apellidos, tipo_documento, numero_documento,
                fecha_nacimiento, genero, email, direccion, telefono,
                contraseña, tarjeta, numero_tarjeta, cvv,
                fecha_de_vencimiento, paquete, terminosNoticias, terminoTyC
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """

            valores = (
                get("nombres"),
                get("apellidos"),
                get("tipo_documento"),
                get("numero_documento"),
                get("fecha_nacimiento"),
                get("genero"),
                get("email"),
                get("direccion"),
                get("telefono"),
                password_hash,
                get("tarjeta"),
                get("numero_tarjeta"),
                get("cvv"),
                get("fecha_de_vencimiento"),
                get("paquete"),
                get("terminosNoticias"),
                get("terminoTyC")
            )

            cursor.execute(sql, valores)
            conn.commit()
            cursor.close()
            conn.close()

            start_response("200 OK", [("Content-Type", "text/html")])
            return [b"<h1>Registro guardado correctamente</h1>"]

        except Exception as e:
            start_response("500 Internal Server Error", [("Content-Type", "text/plain")])
            return [str(e).encode("utf-8")]

    else:
        contenido, tipo_mime = serve_static(path)
        if contenido:
            start_response("200 OK", [("Content-Type", tipo_mime)])
            return [contenido]
        else:
            start_response("404 Not Found", [("Content-Type", "text/html")])
            return [b"<h1>Pagina no encontrada</h1>"]


if __name__ == "__main__":
    with make_server("localhost", 8000, application) as server:
        print("Servidor en http://localhost:8000")
        server.serve_forever()