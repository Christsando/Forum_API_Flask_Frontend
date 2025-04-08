from flask import request
from flask_restful import Resource
from models import db, Forum
from schemas import ForumSchema

forum_schema = ForumSchema()
forums_schema = ForumSchema(many=True)

class ForumListResource(Resource):
    def get(self):
        forums = Forum.query.all()
        return forums_schema.dump(forums), 200

    def post(self):
        data = request.get_json()
        errors = forum_schema.validate(data)
        if errors:
            return errors, 400

        new_forum = Forum(title=data['title'], content=data['content'])
        db.session.add(new_forum)
        db.session.commit()
        return forum_schema.dump(new_forum), 201

class ForumResource(Resource):
    def put(self, forum_id):
        forum = Forum.query.get_or_404(forum_id)
        data = request.get_json()
        forum.title = data.get('title', forum.title)
        forum.content = data.get('content', forum.content)
        db.session.commit()
        return forum_schema.dump(forum), 200

    def delete(self, forum_id):
        forum = Forum.query.get_or_404(forum_id)
        db.session.delete(forum)
        db.session.commit()
        return '', 204
