import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("config\eeegame-aeb64-firebase-adminsdk-n6o3g-d020ca5c5d.json")
firebase_admin.initialize_app(cred)
