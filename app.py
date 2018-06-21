from flask import Flask,url_for,redirect,render_template,request
app = Flask(__name__)
import database
from flask import jsonify
import json

global name
name=""
@app.route('/')
def index():
    global name
    if(name!=""):
    #context={
    #    "username":"小达达",
    #    "gender":"男",
    #    "age":18
   # }
        return render_template("index.html",name=name)
    else:
        return render_template('index.html')
    #print (url_for("my_list"))
    #print (url_for("article",id="123"))
    #return redirect(url_for("my_list"))
    #return 'Hello World!'
@app.route('/login/' , methods=['GET','POST'])
def login():
    global name
    if request.method == 'GET':
        return render_template('login.html')
    else:      
        name=request.form['USERNAME']
        b=request.form['PASSWORD']
        d=database.select(name)
        f={'USERNAME':name,'PASSWORD':d}
        
        return jsonify(f)
@app.route('/loginout/')
def loginout():
    global name
    name =""
    return render_template('index.html')

@app.route('/register/', methods=['GET','POST'])
def register():
    if request.method =='GET':
        return render_template('register.html')
    else:
        print('sss')
        a=request.form['USERNAME']
        b=request.form['PASSWORD']
        c=request.form['PHONE']
        d=request.form['EMAIL']
        database.insert(a,b,c,d)
        f={'flag':'1'}
        return jsonify(f)
@app.route('/about/')
def about():
    global name
    if(name!=""):
        return render_template("page2.html",name=name)
    else:
        return render_template("page2.html")  

@app.route('/join/')
def join():
    global name
    if(name!=""):
        return render_template("page3.html",name=name)
    else:
        return render_template("page3.html")  

@app.route('/query/')
def query():
    return  render_template('page4.html')

@app.route('/game/')
def game():
    return  render_template('page5.html')
    
@app.route("/list/")
def my_list():
    return "list"
@app.route("/article/<id>/")
def article(id):
    return "你的id是：%s" % id

if __name__ == '__main__':
    app.run(debug=True)

