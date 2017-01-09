/**
 * Created by Sumit Patel on 9/24/2016.
 */


var resaturentMaster = function () {
    prevUniqueId = "";
}
    resaturentMaster.prototype.createRestaurent = function () {

    var restaurants = [
        {
        name: "Kapila Kathi Kebab",
        address: {
            "address": "153/1, Dhole Patil Road",
            "area": "Dhole Patil Road"
        },
        cuisine: "Fast Food, Street Food",
        image: "./assets/img/casper.jpg",
        operating_hours: '12-22',

        reviews: [
            {
                "stars": 5,
                "name": "Ire Aderinokun",
                "date": "2016-05-03",
                "review": " It's a good place to catch a quick bite if you're hanging around on dp road. The place can be easily found since it's in close proximity to Ruby hall hospital."
            },
            {
                "stars": 4,
                "name": "Jennifer Appleseed",
                "date": "2016-04-17",
                "review": "The rolls are awesome. They have a limited menu but unmatched expertise. Spicy as promised. Tried their extra chicken roll with egg roti. Wasool Must try."
            },
            {
                "stars": 3,
                "name": "John Doe",
                "date": "2016-03-22",
                "review": "This is one of the best places to indulge in a kathi kebab roll in Pune. Tender and juicy pieces of chicken , marinated well in the masala when wrapped in the roti cooked in egg. It shall indeed give you a bite of heaven.Do visit the place . And try something that is a huge contribution to Pune's food culture."
            },
            {
                "stars": 2,
                "name": "John Appleseed",
                "date": "2016-01-02",
                "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard. Truffaut VHS retro ugh, cornhole cray pinterest tumblr master cleanse squid actually put a bird on it YOLO four loko ethical. "
            },
            {
                "stars": 5,
                "name": "Jane Doe",
                "date": "2016-02-11",
                "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard.  "
            }
        ]
    },
        {
            name: "Cocoparra",
            address: {
                "address": "Survey 20 A, Under Kharadi Mundhwa Bridge, Kharadi",
                "area": "Kharadi"
            },
            cuisine: "Continental",
            image: "./assets/img/casper.jpg",
            operating_hours: '12-22',
            reviews: [
                {
                    "stars": 5,
                    "name": "Ire Aderinokun",
                    "date": "2016-05-03",
                    "review": " It's a good place to catch a quick bite if you're hanging around on dp road. The place can be easily found since it's in close proximity to Ruby hall hospital."
                },
                {
                    "stars": 4,
                    "name": "Jennifer Appleseed",
                    "date": "2016-04-17",
                    "review": "The rolls are awesome. They have a limited menu but unmatched expertise. Spicy as promised. Tried their extra chicken roll with egg roti. Wasool Must try."
                },
                {
                    "stars": 3,
                    "name": "John Doe",
                    "date": "2016-03-22",
                    "review": "This is one of the best places to indulge in a kathi kebab roll in Pune. Tender and juicy pieces of chicken , marinated well in the masala when wrapped in the roti cooked in egg. It shall indeed give you a bite of heaven.Do visit the place . And try something that is a huge contribution to Pune's food culture."
                },
                {
                    "stars": 2,
                    "name": "John Appleseed",
                    "date": "2016-01-02",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard. Truffaut VHS retro ugh, cornhole cray pinterest tumblr master cleanse squid actually put a bird on it YOLO four loko ethical. "
                },
                {
                    "stars": 5,
                    "name": "Jane Doe",
                    "date": "2016-02-11",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard.  "
                }
            ]
        },
        {
            name: "Euriska",
            address: {
                "address": "Near Nitesh HUB, KP Annexe, Mundhwa",
                "area": "Mundhwa"
            },
            cuisine: "Italian, Mediterranean, Greek",
            image: "./assets/img/casper.jpg",
            operating_hours: '12-22',
            reviews: [
                {
                    "stars": 5,
                    "name": "Ire Aderinokun",
                    "date": "2016-05-03",
                    "review": " A really cool place! This place is completely deserted on Monday! Literally... We were the ONLY customers! (It was kinda creepy & scarry too)... Out door seats are awesome... Only down side is mosquitoes!"
                },
                {
                    "stars": 4,
                    "name": "Jennifer Appleseed",
                    "date": "2016-04-17",
                    "review": " This was a place i had been waiting for long to visit for two reasons. They have amazing deals on the drinks and most importantly they allow you to come with your pets and that for me is the deal changer."
                },
                {
                    "stars": 3,
                    "name": "John Doe",
                    "date": "2016-03-22",
                    "review": "This is one of the best places to indulge in a kathi kebab roll in Pune. Tender and juicy pieces of chicken , marinated well in the masala when wrapped in the roti cooked in egg. It shall indeed give you a bite of heaven.Do visit the place . And try something that is a huge contribution to Pune's food culture."
                },
                {
                    "stars": 2,
                    "name": "John Appleseed",
                    "date": "2016-01-02",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard. Truffaut VHS retro ugh, cornhole cray pinterest tumblr master cleanse squid actually put a bird on it YOLO four loko ethical. "
                },

            ]
        },
        {
            name: "3 Spices",
            address: {
                "address": "DoubleTree By Hilton Hotel, C 32, MIDC, Tata Motors Road, Chinchwad",
                "area": "Chinchwad"
            },
            cuisine: "North Indian",
            image: "./assets/img/casper.jpg",
            operating_hours: '12-22',
            reviews: [
                {
                    "stars": 5,
                    "name": "Ire Aderinokun",
                    "date": "2016-05-03",
                    "review": " It's a good place to catch a quick bite if you're hanging around on dp road. The place can be easily found since it's in close proximity to Ruby hall hospital."
                },
                {
                    "stars": 4,
                    "name": "Jennifer Appleseed",
                    "date": "2016-04-17",
                    "review": "The rolls are awesome. They have a limited menu but unmatched expertise. Spicy as promised. Tried their extra chicken roll with egg roti. Wasool Must try."
                },
                {
                    "stars": 3,
                    "name": "John Doe",
                    "date": "2016-03-22",
                    "review": "This is one of the best places to indulge in a kathi kebab roll in Pune. Tender and juicy pieces of chicken , marinated well in the masala when wrapped in the roti cooked in egg. It shall indeed give you a bite of heaven.Do visit the place . And try something that is a huge contribution to Pune's food culture."
                },
                {
                    "stars": 2,
                    "name": "John Appleseed",
                    "date": "2016-01-02",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard. Truffaut VHS retro ugh, cornhole cray pinterest tumblr master cleanse squid actually put a bird on it YOLO four loko ethical. "
                },
                {
                    "stars": 5,
                    "name": "Jane Doe",
                    "date": "2016-02-11",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard.  "
                }
            ]
        },
        {
            name: "Eighty Eight - Hyatt",
            address: {
                "address": "Hyatt Pune, Adjacent to Aga Khan Palace, 88, Nagar Road, Kalyani Nagar",
                "area": "Kalyani Nagar"
            },
            cuisine: "Italian",
            image: "./assets/img/casper.jpg",
            operating_hours: '12-22',
            reviews: [
                {
                    "stars": 5,
                    "name": "Ire Aderinokun",
                    "date": "2016-05-03",
                    "review": " It's a good place to catch a quick bite if you're hanging around on dp road. The place can be easily found since it's in close proximity to Ruby hall hospital."
                },
                {
                    "stars": 4,
                    "name": "Jennifer Appleseed",
                    "date": "2016-04-17",
                    "review": "The rolls are awesome. They have a limited menu but unmatched expertise. Spicy as promised. Tried their extra chicken roll with egg roti. Wasool Must try."
                },
                {
                    "stars": 3,
                    "name": "John Doe",
                    "date": "2016-03-22",
                    "review": "This is one of the best places to indulge in a kathi kebab roll in Pune. Tender and juicy pieces of chicken , marinated well in the masala when wrapped in the roti cooked in egg. It shall indeed give you a bite of heaven.Do visit the place . And try something that is a huge contribution to Pune's food culture."
                },
                {
                    "stars": 2,
                    "name": "John Appleseed",
                    "date": "2016-01-02",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard. Truffaut VHS retro ugh, cornhole cray pinterest tumblr master cleanse squid actually put a bird on it YOLO four loko ethical. "
                },
                {
                    "stars": 5,
                    "name": "Jane Doe",
                    "date": "2016-02-11",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard.  "
                }
            ]
        },
        {
            name: "Fly Curry",
            address: {
                "address": "Nakhate Chowk, Rambaug Colony, Rahatani road, Pimple Saudagar",
                "area": "Pimple Saudagar"
            },
            cuisine: "North Indian",
            image: "./assets/img/casper.jpg",
            operating_hours: '12-22',
            reviews: [
                {
                    "stars": 5,
                    "name": "Ire Aderinokun",
                    "date": "2016-05-03",
                    "review": " It's a good place to catch a quick bite if you're hanging around on dp road. The place can be easily found since it's in close proximity to Ruby hall hospital."
                },
                {
                    "stars": 4,
                    "name": "Jennifer Appleseed",
                    "date": "2016-04-17",
                    "review": "The rolls are awesome. They have a limited menu but unmatched expertise. Spicy as promised. Tried their extra chicken roll with egg roti. Wasool Must try."
                },
                {
                    "stars": 3,
                    "name": "John Doe",
                    "date": "2016-03-22",
                    "review": "This is one of the best places to indulge in a kathi kebab roll in Pune. Tender and juicy pieces of chicken , marinated well in the masala when wrapped in the roti cooked in egg. It shall indeed give you a bite of heaven.Do visit the place . And try something that is a huge contribution to Pune's food culture."
                },
                {
                    "stars": 2,
                    "name": "John Appleseed",
                    "date": "2016-01-02",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard. Truffaut VHS retro ugh, cornhole cray pinterest tumblr master cleanse squid actually put a bird on it YOLO four loko ethical. "
                },
                {
                    "stars": 5,
                    "name": "Jane Doe",
                    "date": "2016-02-11",
                    "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard.  "
                }
            ]
        }

    ];
        var obj={
            name: "Latitude - Vivanta By Taj",
            address: {
            "address": "Vivanta By Taj Blue Diamond, 11, Koregaon Park Road, Koregaon Park",
            "area": "Koregaon Park"
        },
            cuisine: "European",
            operating_hours: '12-22',
            reviews: [
            {
                "stars": 4,
                "name": "Jennifer Appleseed",
                "date": "2016-04-17",
                "review": "The rolls are awesome. They have a limited menu but unmatched expertise. Spicy as promised. Tried their extra chicken roll with egg roti. Wasool Must try."
            },
            {
                "stars": 3,
                "name": "John Doe",
                "date": "2016-03-22",
                "review": "This is one of the best places to indulge in a kathi kebab roll in Pune. Tender and juicy pieces of chicken , marinated well in the masala when wrapped in the roti cooked in egg. It shall indeed give you a bite of heaven.Do visit the place . And try something that is a huge contribution to Pune's food culture."
            },
            {
                "stars": 2,
                "name": "John Appleseed",
                "date": "2016-01-02",
                "review": "Neutra williamsburg keytar franzen skateboard, shoreditch pickled banh mi pabst kale chips you probably haven't heard of them art party beard brooklyn knausgaard. Truffaut VHS retro ugh, cornhole cray pinterest tumblr master cleanse squid actually put a bird on it YOLO four loko ethical. "
            },

        ]
        }

    var ref = new Firebase("https://rest-reviewer.firebaseIO.com");
        ref.child('restaurants').push(obj);
  /*  for(var i=0;i < restaurants.length;i++){
        ref.child('restaurants').push(restaurants[i]);
    }*/

},
    resaturentMaster.prototype.loadRestaurants = function () {
      /*  var ref = new Firebase("https://rest-reviewer.firebaseIO.com/restaurants");*/
        
        
        
        firebase.database().ref("/Restaurant").on("value", function(myObjRest) {
            var arrRest = $.map(myObjRest.val(), function (value, index) {
                return [value];
            });
            var location=$("#location")[0];
            var cuisine=$("#cuisine")[0];
            if(location.value!="0" || cuisine.value!="0") {
               var arr = $.grep(arrRest, function (item) {
                    if(location.value!="0" && cuisine.value!="0"){
                        if (item.address.area.indexOf(location.value) > -1 && item.cuisine.indexOf(cuisine.value) > -1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else
                    {
                        if (item.address.area.indexOf(location.value) > -1) {
                            return true;
                        }
                        else if (item.cuisine.indexOf(cuisine.value) > -1) {
                            return true;
                        }
                        else {
                            return false;
                        }

                    }

                });
            }
            else{
                arr=arrRest;
            }
            
            var str="";
            for(var i=0;i<arr.length;i++){
                str+="<div class=\"col-sm-4\" id='"+ arr[i].id+"'>";
                str+="<div class=\"feature-content\">";
                str+="<a href=\"../restDetails.html?id="+ arr[i].id + "\" ><img src=\"img/large/"+ arr[i].id + ".jpg\" alt='"+ arr[i].name +"'></a>";
                str+="<h2 class=\"feature-content-title green-text\">"+ arr[i].name + " </h2>";
                str+=" <p class=\"feature-content-description\">Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.";
                str+=" </p>";

                str+="<a href=\"../restDetails.html?id="+ arr[i].id + "\" class=\"readMoreText\">Read More</a>";
                str+="</div></div>";

            }
            if(str==""){
                str= "<h2 style='padding:5px 538px;!important;' class=\"feature-content-title green-text\">No Restaurant found </h2>";
            }
            var cont = $("#lstRestaurants");
            cont.empty();;
            cont.html(str);
            $("#loader")[0].style.display="none";
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    },
    resaturentMaster.prototype.loadRestaurantDetails = function (id) {
        var me=this;
           /* var ref = new Firebase("https://rest-reviewer.firebaseIO.com/restaurants");*/

        firebase.database().ref("/Restaurant").on("value", function(myObjRest) {
                objRest=myObjRest;
                arr = $.map(myObjRest.val(), function (value, index) {
                    return [value];
                });

                var str="";
                for(var i=0;i<arr.length;i++){
                    if(arr[i].id==id){
                        var restImage = $("#imgRestDetail")[0];
                        restImage.src="img/small/"+ arr[i].id + ".jpg";
                        restImage.alt=arr[i].name;
                        var restName = $("#restName");
                        restName.empty();
                        restName.html(arr[i].name);
                        restName.alt=arr[i].name;

                        var restAddress = $("#restAddress");
                        restAddress.empty();
                        restAddress.html("Address : " + arr[i].address.address);

                        var restCusine = $("#restCusine");
                        restCusine.empty();
                        restCusine.html("Cuisine : " + arr[i].cuisine);

                        var restOpenTime = $("#restOpenTime");
                        restOpenTime.empty();
                        restOpenTime.html("Open time : " + arr[i].operating_hours);




                    var reviews=arr[i].reviews;
                        var str="";
                        str+="<hr/>";
                        for(var j=0;j<reviews.length;j++){
                            str+="<div class=\"row\">";
                            str+="<div class=\"col-sm-3\">";
                            str+="<div class=\"review-block-name\"><h5 class='review-name' alt='"+reviews[j].name+"'>"+ reviews[j].name + "</h5></div>";
                            str+="<div class=\"review-block-date\">"+ reviews[j].date + "</div>";
                            str+="</div>";
                            str+="<div class=\"col-sm-9\">";
                            var reviewcontId="review-container"+me.getUniqueId();
                            str+="<div class=\"review-block-rate\" id='"+reviewcontId+"'>";
                            for(var k=1;k<5;k++){
                                if(k <= reviews[j].stars){
                                    str+="<span class=\"glyphicon .glyphicon-star-empty glyphicon-star starsDisplay\" ></span>";
                                }
                                else
                                {
                                    str+="<span class=\"glyphicon .glyphicon-star-empty glyphicon-star-empty starsDisplay\"></span>";
                                }
                            }
                            str+="</div>";
                            str+="<div class=\"review-description\">"+ reviews[j].review + "</div>";
                            str+="</div>";
                            str+="</div>";
                            str+="<hr/>";
                        }
                        var cont = $("#container-review-list");
                        cont.empty();;
                        cont.html(str);
                        $("#loader")[0].style.display="none";
                    }
                }

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        },
    resaturentMaster.prototype.addNewReview = function (objReview) {
        var me=this;
            var str="";
            str+="<hr/>";
            str+="<div class=\"row\">";
            str+="<div class=\"col-sm-3\">";
            str+="<div class=\"review-block-name\"><h5 class='review-name' alt='"+objReview.name+"'>"+ objReview.name + "</h5></div>";
            str+="<div class=\"review-block-date\">"+ objReview.date + "</div>";
            str+="</div>";
            str+="<div class=\"col-sm-9\">";
        var reviewcontId="review-container"+me.getUniqueId();
            str+="<div class=\"review-block-rate\" id='"+reviewcontId+"'>";
            for(var k=1;k<5;k++){

                if(k <= objReview.stars){
                    str+="<span class=\"glyphicon .glyphicon-star-empty glyphicon-star starsDisplay\" ></span>";
                }
                else
                {
                    str+="<span class=\"glyphicon .glyphicon-star-empty glyphicon-star-empty starsDisplay\"></span>";
                }
            }
            str+="</div>";
            str+="<div class=\"review-description\">"+objReview.review + "</div>";
            str+="</div>";
            str+="</div>";

            var cont = $("#container-review-list")[0];
            cont.innerHTML = str + cont.innerHTML  ;
            var id=getUrlVars("id").split("#")[0];
        var reviewsRef = firebase.database().ref("/Restaurant/"+id+"/").once("value").then(function (data) {

            arr = $.map(data.val(), function (value, index) {
                return [value];
            });
            var updates = {};
            updates["/Restaurant/"+id+"/reviews/"+arr[5].length+""] = objReview;

            firebase.database().ref().update(updates);
        }).catch(function (error) {
            console.error(error);
        });

        }
    resaturentMaster.prototype.showRestDetails = function (id) {
      window.location = "restDetails.html?id="+id;
   }
resaturentMaster.prototype.getUniqueId = function () {
    var me=this;
    while (true) {
        var dt = new Date();
        var id = dt.getUTCDate() + dt.getUTCMonth() + dt.getUTCHours() + dt.getUTCMinutes() + dt.getUTCSeconds() + dt.getMilliseconds();
        if (id != me.prevUniqueId) {
            me.prevUniqueId = id;
            return id;
        }
    }
},
    resaturentMaster.prototype.validateReview = function () {
        $('#post-review-form')
            .bootstrapValidator({
                framework: 'bootstrap',
                icon: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                row: {
                    valid: 'field-success',
                    invalid: 'field-error'
                },
                fields: {
                    raterName: {
                        row: '.col-xs-5',
                        validators: {
                            notEmpty: {
                                message: 'The User Name is required'
                            }
                        }
                    },
                    comment: {
                        row: '.col-xs-5',
                        validators: {
                            notEmpty: {
                                message: 'comment is required'
                            }
                        }
                    }
                },
            })
            .on('submit', function (e, data) {
                var $form = $(e.target);
                if (e.isDefaultPrevented()) {
                    // handle the invalid form...
                    $form.bootstrapValidator('disableSubmitButtons', false);
                } else {                    
                    e.preventDefault();
                }
            })
    }

