import urllib.request, json
# from collections import OrderedDict

#school dataset url
school_url = "https://api.opendata.onisep.fr/downloads/5fa586da5c4b6/5fa586da5c4b6.json"

response = urllib.request.urlopen(school_url)

#loads from url
school_data = json.loads(response.read())

#json dataset keys list
school_keys = list(school_data[0].keys())
print(school_keys)
school_keys.remove("nom")
school_keys.remove("adresse")
school_keys.remove("commune")
school_keys.remove("region")
school_keys.remove("latitude_y")
school_keys.remove("longitude_x")
print(school_data)

# desired_key_order = ("@context","@type", "name", "acronym","geo","contact","adress")
data = {
    "@context":{
        "@vocab":"http://www.semanticweb.org/ontologies/2021/2/school#",
        "@base":"http://www.semanticweb.org/ontologies/2021/2/school",
        "gid": "@id",
        "name":{
            "@id":"nom",
            "@type": "http://www.w3.org/2001/XMLSchema#string"
        },
        "adresse":{
            "@id":"adresse",
            "@type": "http://www.w3.org/2001/XMLSchema#string"
        },
        "commune": "Ville",
        "region":"Region",
        "latitude_y": {
            "@id":"Latitude",
            "@type":"http://www.w3.org/2001/XMLSchema#float"
        }, 
        "longitude_x":{
            "@id":"Longitude",
            "@type":"http://www.w3.org/2001/XMLSchema#float"
        },
    "records":{"@id":"_records", "@container":"@set"}
    },
    "records":[]
}

for sjson in school_data:
    for key in school_keys:
        sjson.pop(key)

    data["records"].append(sjson)

    
with open("school_uni.json","w",encoding="utf-8") as file:

    json.dump(data, file)
    


