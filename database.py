import sqlite3

def select(username):
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    password=""
    cursor = c.execute("SELECT PASSWORD from user where USERNAME = '%s' " % (username) )
    for row in cursor:
        password = row[0]     
    conn.close()
    return password

def insert(username,password,phone,email):
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    a=c.execute("INSERT OR IGNORE INTO user (USERNAME,PASSWORD,PHONE,EMAIL) VALUES ('%s','%s','%s','%s')"%(username,password,phone,email))
    conn.commit()
    conn.close()
    return a

def selectaccount(id,phone):
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    status=""
    cursor = c.execute("SELECT STATUS from account where ID = '%s' AND PHONE = '%s' " % (id,phone) )
    for row in cursor:
        status = row[0]     
    conn.close()
    return status

    

