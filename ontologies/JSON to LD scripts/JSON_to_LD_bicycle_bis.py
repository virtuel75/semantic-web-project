import urllib.request, json
from collections import OrderedDict

#lyon bicyle dataset url
bicyle_lyon_url =  "https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=1.1.0&outputformat=GEOJSON&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171"
response = urllib.request.urlopen(bicyle_lyon_url)

#loads from url
bicyle_lyon_data = json.loads(response.read())
print(list(bicyle_lyon_data['features'][0].keys()))

data = '''
{
    "@context":{
        "@vocab":"http://www.semanticweb.org/ontologies/2021/2/bike_station#",
        "@base":"http://www.semanticweb.org/ontologies/2021/2/bike_station",
        "gid": "@id",
        "name":"Station_name",
        "lat":{
            "@id":"Latitude",
            "@type":"http://www.w3.org/2001/XMLSchema#float"
        }, 
        "lng":{
            "@id":"Longitude",
            "@type":"http://www.w3.org/2001/XMLSchema#float"
        },
        "coordinates":"Coordinates",
        "available_bikes": {
            "@id":"Available_bike",
            "@type":"http://www.w3.org/2001/XMLSchema#int"
        },
        "bike_stands":{
            "@id":"Number_spot",
            "@type":"http://www.w3.org/2001/XMLSchema#int"
        },      
        "status":"Etat",
        "commune":"Ville",
        "features":{"@id":"_features", "@container":"@set"},
        "geometry":{"@id":"_geometry", "@container":"@set"},
        "type":null ,"address":null,"address2":null,"nmarrond":null,"bonus":null,
        "pole":null,"available_bike_stands":null,"availabilitycode":null,"availability":null,"banking":null,"code_insee":null,"last_update":null,"last_update_fme":null,
        "number":null,"langue":null,"etat":null,"nature":null,"titre":null,"description":null,"startdate":null,
        "enddate":null
    }
}
'''
# with open("bicycle_lyon.json","w",encoding="utf-8") as file:
d = json.loads(data)
d["features"]=bicyle_lyon_data["features"]
print(d)
s = json.dumps(d)
open("bicycle_lyon.json","w",encoding="utf-8").write(s)    


#paris bicyle dataset url
bicyle_paris_url =  "https://opendata.paris.fr/explore/dataset/velib-disponibilite-en-temps-reel/download/?format=json&timezone=Europe/Berlin&lang=fr"
response = urllib.request.urlopen(bicyle_paris_url)

#loads from url
bicyle_paris_data = json.loads(response.read())

data = '''
{ 
    "@context":{
        "@vocab":"http://www.semanticweb.org/ontologies/2021/2/bike_station#",
        "@base":"http://www.semanticweb.org/ontologies/2021/2/bike_station",
        "stationcode": "@id",
        "name":"Station_name",
        "coordonnees_geo":{
            "@id":"Coordinates",
            "@type":"http://www.w3.org/2001/XMLSchema#float"
        }, 
        "numbikesavailable": {
            "@id":"Available_bike",
            "@type":"http://www.w3.org/2001/XMLSchema#int"
        },
        "capacity": {
            "@id":"Number_spot",
            "@type":"http://www.w3.org/2001/XMLSchema#int"
        },      
        "is_renting":"Etat",
        "nom_arrondissement_communes":"Ville",
        "duedate":"LastUpdtate",
        "features":{"@id":"_features", "@container":"@set"},
        "datasetid":null,"recordid":null,"ebike":null,"is_installed":null,"mechanical":null,"numdocksavailable":null,
        "is_returning":null,"record_timestamp":null,"geometry":null
    }
}
'''
d = json.loads(data)
d["features"]=bicyle_lyon_data["features"]
print(d)
s = json.dumps(d)
open("bicycle_paris.json","w",encoding="utf-8").write(s)