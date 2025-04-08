from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from config import Config
from models import db
from resources import ForumListResource, ForumResource

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
api = Api(app)
db.init_app(app)

with app.app_context():
    db.create_all()

api.add_resource(ForumListResource, '/forums')
api.add_resource(ForumResource, '/forums/<int:forum_id>')

if __name__ == '__main__':
    app.run(debug=True)
