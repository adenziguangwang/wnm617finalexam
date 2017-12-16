var map;
        var myMarker;
        var image = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/map-marker-icon.png";

        function initMap() {
            var paris = new google.maps
                .LatLng(37.786261, -122.399533);
            var mapOption = {
                zoom: 15,
                center: paris
            }
            map = new google.maps
                .Map(document.getElementById("map"), mapOption);
        }
        function dropPin() {
            //remove the existing marker
            if (myMarker) {
                myMarker.setMap(null);
            }
            myMarker = new google.maps.Marker({
                position: map.getCenter(),
                map: map,
                draggable: true,
                icon: image,
                animation: google.maps.Animation.DROP,
            });
            myMarker.addListener('click', toggleBounce);
            google.maps.event.addListener(myMarker, 'dragend',function(){
                 copyMarkerPosition();
            });
            } 
            function copyMarkerPosition(){
                document.getElementById("end").value = myMarker.getPosition().lat() + ',' + myMarker.getPosition().lng();
            }
            function toggleBounce() {
                if(myMarker.getAnimation() != null){
                    myMarker.setAnimation(null);
                }
                else {
                    myMarker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }