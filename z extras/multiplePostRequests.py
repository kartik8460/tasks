# For Adding Data in the Database
import requests
from string import ascii_lowercase

for c in ascii_lowercase:
    payload = {
        'name':c,
        'email':c+'@'+c+'.com',
        'password':c
    }
    r = requests.post('http://localhost:3000/v1/auth/register',data = payload)
    print(payload)
    if c == 'j' :
        break

print('Finished')