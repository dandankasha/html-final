#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('test.db')

print ("Opened database successfully")


#!/usr/bin/python




#c = conn.cursor()

#c.execute('''CREATE TABLE user
##      (
#       USERNAME  TEXT  PRIMARY KEY    NOT NULL,
 #      PASSWORD        TEXT    NOT NULL,
#       PHONE           TEXT,
##       EMAIL           TEXT)''')
#print ("Table created successfully")
#conn.commit()
#conn.close()


#!/usr/bin/python
'''
conn = sqlite3.connect('test.db')
print ("Opened database successfully")
c = conn.cursor()

c.execute("INSERT INTO user (ID,USERNAME,PASSWORD,PHONE,EMAIL) \
      VALUES (2, 'Paul12', '222222', '18888888888', '1968171534@qq.com')")


conn.commit()
print ("Records created successfully")
conn.close()
'''


#!/usr/bin/python





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
    c.execute("INSERT INTO user (USERNAME,PASSWORD,PHONE,EMAIL) VALUES ('%s','%s','%s','%s')"%(username,password,phone,email))
    conn.commit()
    conn.close()

def selectaccount(id,phone):
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    status=""
    cursor = c.execute("SELECT STATUS from account where ID = '%s' AND PHONE = '%s' " % (id,phone) )
    for row in cursor:
        status = row[0]     
    conn.close()
    return status

    

