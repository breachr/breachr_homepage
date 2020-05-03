proc_name = 'breachr'
bind = '127.0.0.1:8000'
workers = 2
#user = 'root'
#group = 'webapps'
#loglevel = 'debug'
errorlog = '/var/www/breachr/logs/gunicorn.error.log'
accesslog = '/var/www/breachr/logs/gunicorn.access.log'
