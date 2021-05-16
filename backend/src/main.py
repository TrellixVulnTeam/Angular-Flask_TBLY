from flask import  jsonify, request, Blueprint
from . import app
bp = Blueprint('api', __name__,
                        template_folder='templates')		

@bp.route('/test')
def get_exams():
	return jsonify('holi')

@bp.route('/')
def index():
	return jsonify("Hello World")

app.register_blueprint(bp, url_prefix='/api')
