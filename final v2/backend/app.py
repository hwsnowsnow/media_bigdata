from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, Flask and Vue3!'

if __name__ == '__main__':
    app.run()
