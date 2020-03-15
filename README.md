# Priyanka_UFOs
In this Module, we begin our JavaScript journey by looking into its technical aspects and how it applies to the field of data analytics and visualization.


# Module 11 Submission
**Presents a cohesive written summary that describes the purpose of the project, the technologies used,
and 1 recommendation for further development.

# Project Overview:
** INFORMATION DISPLAYED:
This UFS Sightings Project creates a webpage which displays a table with the following columns providing UFO sighting information:
Fields Displayed in the Table:
1. Date
2. City
3. State
4. Country
5. Shape
6. Durations
7. Comments
(screenshot of the table)
 <img width="950" alt="INFORMATION DISPLAYED" src="https://user-images.githubusercontent.com/55486501/76708151-ac8db480-671a-11ea-9ce9-7ad2d4ae9f6d.png">

  

** DATA FILTERS:
Additionally, new functionality to filter the data displayed in the table was added by Priyanka. The filter consists of the following fields to narrow down the data:
Fields to filter the data:
1. Date
2. City
3. State
4. Country
5. Shape
(screenshot of the filters on the left side of the webpage)
<img width="310" alt="DATA FILTERS" src="https://user-images.githubusercontent.com/55486501/76708177-dc3cbc80-671a-11ea-8b2a-f571534ed556.png">


** The final webpage looks as follows:
(full screenshot of the webpage)
<img width="1572" alt="full screenshot of the webpag" src="https://user-images.githubusercontent.com/55486501/76708202-07271080-671b-11ea-8491-b9e364a7130f.png">

## Technology and Resources:
The following technologies and resources were used for implementing this project.
1. Software technology: Javascript ES6+, HTML5, D3, Bootstrap, VSCode 1.42.1, Chrome: 76.0.3809.146, OS: OSX Darwin x64 17.7.0
2. Data Source (provided): data.js

## Further recommendation:
I would recommend that data visualization in the following form will greatly help the user to derive additional insights.
The following data visualization improvements are recommended.
1. Integrate with D3.JS and Google APIs (https://maps.googleapis.com/maps/api/) and display a map of the country.
2. Then display each of the sighting locations on the map. The map should be zoomable to the city level.
3. Mark each city with a circle whose color depends on the shape of the UFO sighting and the radius depending on the duration of the sighting. If there are multiple sightings at the same location then display the number of sightings in the middle of the circle. Using D3, adjust the font size of the number of sightings so that it is still readable if the map is zoomed out. You can make the locations zoom in a fisheye fashion using D3 when the mouse is hovered over a particular location of the map.
4. The resulting map will have colored dots at the location of sightings with since of the dots denoting the duration.
5. A legend for mapping the shape to color and the duration of sighting to the size of the radius of the circle will also need to be provided.
6. The backend can be connected to a live stream which feeds new sightings continuously and that data becomes available for filtering and visualization. More filtering options to group can also be provided.
7. An example of the map with circles is provided below for tickling the developer’s imagination. (Source: D3JS.org)


<img width="1018" alt=" example of the map with circles" src="https://user-images.githubusercontent.com/55486501/76708218-2d4cb080-671b-11ea-927d-3d5b2f0889de.png">
