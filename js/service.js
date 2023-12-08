var consultantList = {
    "Cecilia": {
        image: "img/avatar3.png",
        expertise: "Expertise: Herbal Remedies, Nutritional Herbalism",
        price:"$90/Session",
        content: "Meet Cecilia, a seasoned herbalist whose passion for plant-based \
        healing is rooted in ancient traditions and modern botanical sciences. \
        With a spirit as nurturing as the earth itself, Kapikapone believes in the \
        transformative power of herbs to harmonize body and mind. Her approach intuitive \
        wisdom with empirical knowledge, offering personalized wellness journey that tap \
        into nature's profound pharmacy.",
    },
    "Michael": {
        image: "img/avatar1.png",
        expertise: "Expertise: Clinical Herbalist, Nutrition Therapist",
        star: "5",
        price:"$90/Session",
        content: "Meet Michael, an herbalist and nutrition consultant who offers individual \
        consultations and classes on cooking and herbal remedies. His approach is to help \
        people learn how to eat a whole foods diet, which is rich in the building blocks \
        needed for all the work body does. Rather than focus on using “willpower” or a \
        long list of “forbidden” items, he finds it work well to help people simply add \
        nutrient dense food to daily meals.",
    },
    "Ashley": {
        image: "img/avatar2.png",
        expertise: "Expertise: Eco Therapy Practitioner, Nutritional Guidance",
        star: "5",
        price:"$90/Session",
        content: "Meet Ashley, an integrative pharmacist who combines a blend of traditional \
        herbalism and wisdom as well as the latest research and knowledge on herbs and \
        nutrition. Her passion lays in bringing herbal medicine back into mainstream society \
        and helping people achieve their health goals naturally.She is specialized in hormone \
        balancing, digestive issues, specialized dietary issues, and increasing overall health \
        and vitality.",
    },
}

function get(id) { return document.getElementById(id);}
window.onload = setup;
function setup() {
    get('close').onclick= hideInfo;
    setupConsultList();
}

function setupConsultList()
{    var consultantContent="";
    for (var consultantKey in consultantList) {
        var info = consultantList[consultantKey];
        consultantContent += "<div id='"+ consultantKey+ "' class='item' onclick=showInfo('"+ consultantKey +"')>";
        consultantContent += consultantKey;
        consultantContent += '<div class="star-line"><span class="fa fa-star star-checked"><span class="fa fa-star star-checked"><span class="fa fa-star star-checked"><span class="fa fa-star star-checked"><span class="fa fa-star star-checked"></div>';
        consultantContent += "<img src='"+ info.image + "' alt='" +
        consultantKey + "'/><br>";
        consultantContent += info.price;
        consultantContent += "</div>";
    }
    console.log(consultantContent);
    get('consultant-list').innerHTML = consultantContent;
}

function showInfo(consultantName){
    get('consultant-list').style.display="none";
    get('service-info').style.display="none";
    get('consultant-info').style.display="block";
    var info = consultantList[consultantName];
    console.log(info);
    get('consultant-info-expertise').textContent = info.expertise;
    get('consultant-info-name').textContent = consultantName;
    get('consultant-info-content').textContent = info.content ;
    get('consultant-info-image').innerHTML = "<img src='"+ info.image + "' alt='" +
        consultantName + "'/>";
    console.log("<img src='"+ info.image + "' alt='" +
    consultantName + "'/>")
}

function hideInfo(){
    get('consultant-info').style.display="none";
    get('service-info').style.display="block";
    get('consultant-list').style.display="flex";
}