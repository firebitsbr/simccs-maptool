
//Get description of available readers:
//api/etag/readers/?format=json
var readers_json = '{"count": 7, "next": null, "previous": null, "results": [{"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/readers/T2B/", "reader_id": "T2B", "description": "T2B", "user_id": 3}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/readers/T2C/", "reader_id": "T2C", "description": "T2C", "user_id": 3}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/readers/T1C/", "reader_id": "T1C", "description": "T1C", "user_id": 3}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/readers/T1B/", "reader_id": "T1B", "description": "T1B", "user_id": 3}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/readers/T2A/", "reader_id": "T2A", "description": "T2A", "user_id": 3}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/readers/T1A/", "reader_id": "T1A", "description": "T1A", "user_id": 3}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/readers/TU109876/", "reader_id": "TU109876", "description": "Test User Backyard", "user_id": 3}]}';
var readers_data = JSON.parse(readers_json);

//Map location to reader:
//api/etag/reader_location/?format=json
var reader_locations_json = '{"count": 7, "next": null, "previous": null, "results": [{"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/reader_location/T2B/", "reader_id": "T2B", "location_id": 29, "start_timestamp": "2011-02-01T00:00:00Z", "end_timestamp": null}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/reader_location/T2C/", "reader_id": "T2C", "location_id": 28, "start_timestamp": "2011-02-01T00:00:00Z", "end_timestamp": null}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/reader_location/T1C/", "reader_id": "T1C", "location_id": 27, "start_timestamp": "2011-02-01T00:00:00Z", "end_timestamp": null}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/reader_location/T1B/", "reader_id": "T1B", "location_id": 26, "start_timestamp": "2011-02-01T00:00:00Z", "end_timestamp": null}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/reader_location/T2A/", "reader_id": "T2A", "location_id": 25, "start_timestamp": "2011-02-01T00:00:00Z", "end_timestamp": null}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/reader_location/T1A/", "reader_id": "T1A", "location_id": 24, "start_timestamp": "2011-02-01T00:00:00Z", "end_timestamp": null}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/reader_location/TU109876/", "reader_id": "TU109876", "location_id": 23, "start_timestamp": "2019-12-10T00:00:00Z", "end_timestamp": null}]}';
var reader_locations_data = JSON.parse(reader_locations_json);

//Get location of readers:
//api/etag/locations/?format=json
var locations_json = '{"count": 7, "next": null, "previous": null, "results": [{"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/locations/23/", "location_id": 23, "name": "Reader in middle of lake Thunderbird", "latitude": 35.221468, "longitude": -97.295671, "active": false}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/locations/24/", "location_id": 24, "name": "NaN", "latitude": 35.179477, "longitude": -97.447022, "active": false}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/locations/25/", "location_id": 25, "name": "NaN", "latitude": 35.178762, "longitude": -97.447022, "active": false}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/locations/26/", "location_id": 26, "name": "NaN", "latitude": 35.177852, "longitude": -97.446989, "active": false}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/locations/27/", "location_id": 27, "name": "NaN", "latitude": 35.179404, "longitude": -97.445148, "active": false}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/locations/28/", "location_id": 28, "name": "NaN", "latitude": 35.178604, "longitude": -97.445183, "active": false}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/locations/29/", "location_id": 29, "name": "NaN", "latitude": 35.177492, "longitude": -97.445658, "active": false}]}';
var locations_data = JSON.parse(locations_json);

//Get list of animal details:
//api/etag/animals/?format=json
var animals_json = '{"count": 91, "next": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/?Token=988554158c9ccee7995583f378c1df67bcf1ec94&page=2&format=json", "previous": null, "results": [{"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/1/", "animal_id": 1, "species": "Window Dove", "field_data": {"ANIMAL_CURRENTMARKER": 123456789, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "8/16/2019 9:28", "ANIMAL_ORIGINALMARKER": 123456789}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/3/", "animal_id": 3, "species": "Carolina Chickadee", "field_data": {"ANIMAL_CURRENTMARKER": 227119999, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "11/15/2019 12:32", "ANIMAL_ORIGINALMARKER": 227119999}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/4/", "animal_id": 4, "species": "Carolina Chickadee", "field_data": {"ANIMAL_CURRENTMARKER": 227119999, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "11/17/2019 12:32", "ANIMAL_ORIGINALMARKER": 227229999}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/5/", "animal_id": 5, "species": "Carolina Chickadee", "field_data": {"ANIMAL_CURRENTMARKER": 227119999, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "11/16/2019 12:32", "ANIMAL_ORIGINALMARKER": 227199999}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/2/", "animal_id": 2, "species": "Purple Martin", "field_data": {"ANIMAL_IDENTIFYINGMARKERENDDATE": {"0": "", "1": "", "2": ""}, "ANIMAL_CURRENTMARKER": {"0": 228118763.0, "1": 228118763.0, "2": 228118763.0}, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": {"0": "6/4/2016 10:00", "1": "6/4/2016 10:00", "2": "6/4/2016 10:00"}, "ANIMAL_ORIGINALMARKER": {"0": 228118763.0, "1": 228118763.0, "2": 228118763.0}}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/7/", "animal_id": 7, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118765, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/04/16 13:50:00", "ANIMAL_ORIGINALMARKER": 228118765}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/8/", "animal_id": 8, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162648, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/22/16 10:30:00", "ANIMAL_ORIGINALMARKER": 264162648}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/9/", "animal_id": 9, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126731, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 11:45:00", "ANIMAL_ORIGINALMARKER": 266126731}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/10/", "animal_id": 10, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162635, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 12:00:00", "ANIMAL_ORIGINALMARKER": 264162635}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/11/", "animal_id": 11, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126713, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 11:13:00", "ANIMAL_ORIGINALMARKER": 266126713}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/12/", "animal_id": 12, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162626, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 10:30:00", "ANIMAL_ORIGINALMARKER": 264162626}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/13/", "animal_id": 13, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162641, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/10/16 11:10:00", "ANIMAL_ORIGINALMARKER": 264162641}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/14/", "animal_id": 14, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162645, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/22/16 09:50:00", "ANIMAL_ORIGINALMARKER": 264162645}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/15/", "animal_id": 15, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118766, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/04/16 13:50:00", "ANIMAL_ORIGINALMARKER": 228118766}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/16/", "animal_id": 16, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162638, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/10/16 09:50:00", "ANIMAL_ORIGINALMARKER": 264162638}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/17/", "animal_id": 17, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162632, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 11:55:00", "ANIMAL_ORIGINALMARKER": 264162632}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/18/", "animal_id": 18, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118773, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/05/16 10:50:00", "ANIMAL_ORIGINALMARKER": 228118773}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/19/", "animal_id": 19, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118774, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/05/16 00:00:00", "ANIMAL_ORIGINALMARKER": 228118774}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/20/", "animal_id": 20, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162630, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 11:10:00", "ANIMAL_ORIGINALMARKER": 264162630}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/21/", "animal_id": 21, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162627, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 10:55:00", "ANIMAL_ORIGINALMARKER": 264162627}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/22/", "animal_id": 22, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162628, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 11:00:00", "ANIMAL_ORIGINALMARKER": 264162628}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/23/", "animal_id": 23, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118770, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/04/16 14:40:00", "ANIMAL_ORIGINALMARKER": 228118770}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/24/", "animal_id": 24, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162639, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/10/16 10:10:00", "ANIMAL_ORIGINALMARKER": 264162639}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/25/", "animal_id": 25, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162624, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 10:05:00", "ANIMAL_ORIGINALMARKER": 264162624}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/26/", "animal_id": 26, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162642, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/10/16 12:00:00", "ANIMAL_ORIGINALMARKER": 264162642}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/27/", "animal_id": 27, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126723, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/05/16 10:10:00", "ANIMAL_ORIGINALMARKER": 266126723}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/28/", "animal_id": 28, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162646, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/22/16 09:50:00", "ANIMAL_ORIGINALMARKER": 264162646}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/29/", "animal_id": 29, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162647, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/22/16 10:20:00", "ANIMAL_ORIGINALMARKER": 264162647}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/30/", "animal_id": 30, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162636, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/10/16 09:15:00", "ANIMAL_ORIGINALMARKER": 264162636}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/31/", "animal_id": 31, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126738, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/04/16 13:40:00", "ANIMAL_ORIGINALMARKER": 266126738}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/32/", "animal_id": 32, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162634, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 10:00:00", "ANIMAL_ORIGINALMARKER": 264162634}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/33/", "animal_id": 33, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162622, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/05/16 11:00:00", "ANIMAL_ORIGINALMARKER": 264162622}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/34/", "animal_id": 34, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162620, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/05/16 09:00:00", "ANIMAL_ORIGINALMARKER": 264162620}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/35/", "animal_id": 35, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118775, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/05/16 12:00:00", "ANIMAL_ORIGINALMARKER": 228118775}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/36/", "animal_id": 36, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126733, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 12:00:00", "ANIMAL_ORIGINALMARKER": 266126733}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/37/", "animal_id": 37, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162633, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 09:45:00", "ANIMAL_ORIGINALMARKER": 264162633}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/38/", "animal_id": 38, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162629, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 11:05:00", "ANIMAL_ORIGINALMARKER": 264162629}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/39/", "animal_id": 39, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118764, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 10:25:00", "ANIMAL_ORIGINALMARKER": 228118764}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/40/", "animal_id": 40, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162644, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/11/16 10:00:00", "ANIMAL_ORIGINALMARKER": 264162644}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/41/", "animal_id": 41, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162637, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/10/16 09:30:00", "ANIMAL_ORIGINALMARKER": 264162637}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/42/", "animal_id": 42, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162625, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 10:10:00", "ANIMAL_ORIGINALMARKER": 264162625}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/43/", "animal_id": 43, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162631, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 11:30:00", "ANIMAL_ORIGINALMARKER": 264162631}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/44/", "animal_id": 44, "species": "Purple Martin", "field_data": {"ANIMAL_IDENTIFYINGMARKERENDDATE": {"0": "", "1": ""}, "ANIMAL_CURRENTMARKER": {"0": 228118763, "1": 228118763}, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": {"0": "6/04/16 10:00:00", "1": "6/04/16 10:00:00"}, "ANIMAL_ORIGINALMARKER": {"0": 228118763, "1": 228118763}}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/45/", "animal_id": 45, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126711, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 09:57:00", "ANIMAL_ORIGINALMARKER": 266126711}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/46/", "animal_id": 46, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118768, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/04/16 14:20:00", "ANIMAL_ORIGINALMARKER": 228118768}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/47/", "animal_id": 47, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 228118769, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/04/16 14:40:00", "ANIMAL_ORIGINALMARKER": 228118769}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/48/", "animal_id": 48, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126712, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/07/16 10:35:00", "ANIMAL_ORIGINALMARKER": 266126712}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/49/", "animal_id": 49, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126720, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 12:20:00", "ANIMAL_ORIGINALMARKER": 266126720}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/50/", "animal_id": 50, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 264162640, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/10/16 10:15:00", "ANIMAL_ORIGINALMARKER": 264162640}}, {"url": "https://ec2-54-186-103-38.us-west-2.compute.amazonaws.com/api/etag/animals/51/", "animal_id": 51, "species": "Purple Martin", "field_data": {"ANIMAL_CURRENTMARKER": 266126724, "ANIMAL_IDENTIFYINGMARKERSTARTDATE": "6/08/16 10:46:00", "ANIMAL_ORIGINALMARKER": 266126724}}]}';
var animals_data = JSON.parse(animals_json);
var tag_animals_data = animals_data;
//Get list of animal details:
//api/etag/tag_animal/?format=json
//var tag_animals_json = '';
//var tag_animals_data = JSON.parse(tag_animals_json);
//extract animal list

function animal_list() {
    var all_animal_list = [];
    for (var i=0; i<animals_data['results'].length; i++) {
        all_animal_list.push(animals_data['results'][i]['species']);
    }
    return all_animal_list;
}

var list_of_animal = new Set(animal_list());
