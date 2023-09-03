var vehicles = [
    {
        "items": [
            "Standard Kart"
        ],
        "miniturbo": 0.25
    },
    {
        "items": [
            "Pipe Frame"
        ],
        "speedGnd": -0.25,
        "speedWtr": 0,
        "speedAir": -0.5,
        "speedGty": -0.5,
        "acceleration": 0.5,
        "weight": -0.25,
        "handlingGnd": 0.5,
        "handlingWtr": 0.5,
        "handlingAir": -0.25,
        "handlingGty": 0.25,
        "grip": 0.25,
        "miniturbo": 0.5,
        "invincibility": -0.25
    },
    {
        "items": [
            "Tri-Speeder",
            "Steel Driver"
        ],
        "speedGnd": 0.25,
        "speedWtr": 0.5,
        "speedAir": -0.75,
        "speedGty": -0.25,
        "acceleration": -0.75,
        "weight": 0.5,
        "handlingGnd": -0.5,
        "handlingWtr": 0.75,
        "handlingAir": -0.5,
        "handlingGty": -0.5,
        "grip": 0,
        "miniturbo": -0.25,
        "invincibility": 0.75
    },
    {
        "items": [
            "Prancer"
        ],
        "speedGnd": 0.25,
        "speedWtr": 0,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": -0.5,
        "weight": -0.25,
        "handlingGnd": 0,
        "handlingWtr": 0.25,
        "handlingAir": 0,
        "handlingGty": -0.25,
        "grip": -0.25,
        "miniturbo": 0,
        "invincibility": 0.5
    },
    {
        "items": [
            "Landship"
        ],
        "speedGnd": -0.25,
        "speedWtr": 0.5,
        "speedAir": -0.25,
        "speedGty": -0.75,
        "acceleration": 0.5,
        "weight": -0.5,
        "handlingGnd": 0.25,
        "handlingWtr": 0.75,
        "handlingAir": 0,
        "handlingGty": -0.25,
        "grip": 0.75,
        "miniturbo": 0.5,
        "invincibility": -0.5
    },
    {
        "items": [
            "Sneeker"
        ],
        "speedGnd": 0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": -0.5,
        "weight": 0,
        "handlingGnd": 0,
        "handlingWtr": 0,
        "handlingAir": -0.25,
        "handlingGty": 0,
        "grip": -0.75,
        "miniturbo": 0,
        "invincibility": 0.5
    },
    {
        "items": [
            "Sports Coupe",
            "Mach 8"
        ],
        "speedGnd": 0,
        "speedWtr": 0,
        "speedAir": 0.25,
        "speedGty": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handlingGnd": -0.25,
        "handlingWtr": 0,
        "handlingAir": -0.25,
        "handlingGty": 0.25,
        "grip": 0.25,
        "miniturbo": 0.25,
        "invincibility": 0.25
    },
    {
        "items": [
            "Gold Standard"
        ],
        "speedGnd": 0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": -0.5,
        "weight": 0,
        "handlingGnd": 0,
        "handlingWtr": 0,
        "handlingAir": -0.25,
        "handlingGty": 0,
        "grip": -0.75,
        "miniturbo": 0,
        "invincibility": 0.25
    },
    {
        "items": [
            "Badwagon",
            "GLA"
        ],
        "speedGnd": 0.5,
        "speedWtr": -0.25,
        "speedAir": -0.5,
        "speedGty": 0,
        "acceleration": -1,
        "weight": 0.5,
        "handlingGnd": -0.75,
        "handlingWtr": -0.25,
        "handlingAir": -0.75,
        "handlingGty": -0.5,
        "grip": 0.5,
        "miniturbo": -0.25,
        "invincibility": 1
    },
    {
        "items": [
            "W 25 Silver Arrow"
        ],
        "speedGnd": -0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0.25,
        "acceleration": 0.25,
        "weight": -0.25,
        "handlingGnd": 0.25,
        "handlingWtr": 0.25,
        "handlingAir": 0,
        "handlingGty": 0.25,
        "grip": 0.5,
        "miniturbo": 0.25,
        "invincibility": 0
    },
    {
        "items": [
            "300 SL Roadster"
        ],
        "speedGnd": 0,
        "speedWtr": 0,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": 0,
        "weight": 0,
        "handlingGnd": 0,
        "handlingWtr": 0,
        "handlingAir": 0,
        "handlingGty": 0,
        "grip": 0,
        "miniturbo": 0.25,
        "invincibility": 0.25
    },
    {
        "items": [
            "Blue Falcon"
        ],
        "speedGnd": 0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0.25,
        "acceleration": -0.25,
        "weight": -0.5,
        "handlingGnd": -0.25,
        "handlingWtr": 0.25,
        "handlingAir": -0.5,
        "handlingGty": 0.5,
        "grip": 0,
        "miniturbo": 0,
        "invincibility": 0.25
    },
    {
        "items": [
            "Tanooki Kart"
        ],
        "speedGnd": 0,
        "speedWtr": 0.25,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": -0.5,
        "weight": 0.25,
        "handlingGnd": 0.25,
        "handlingWtr": 0.5,
        "handlingAir": 0,
        "handlingGty": 0,
        "grip": 1,
        "miniturbo": 0.25,
        "invincibility": 0.25
    },
    {
    	"items": [
            "Streetle"
        ],
        "speedGnd": -0.25,
        "speedWtr": 0.5,
        "speedAir": -0.25,
        "speedGty": -0.75,
        "acceleration": 0.5,
        "weight": -0.5,
        "handlingGnd": 0.25,
        "handlingWtr": 0.75,
        "handlingAir": 0,
        "handlingGty": -0.25,
        "grip": 0.75,
        "miniturbo": 0.5,
        "invincibility": -0.25
    },
    {
        "items": [
            "P-Wing",
            "B Dasher",
            "Circuit Special"
        ],
        "speedGnd": 0.5,
        "speedWtr": -0.5,
        "speedAir": -0.25,
        "speedGty": 0.25,
        "acceleration": -0.75,
        "weight": 0.25,
        "handlingGnd": -0.5,
        "handlingWtr": -0.25,
        "handlingAir": -0.75,
        "handlingGty": -0.25,
        "grip": -0.5,
        "miniturbo": -0.25,
        "invincibility": 0.75
    },
    {
        "items": [
            "The Duke"
        ],
        "speedGnd": 0,
        "speedWtr": 0,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": 0,
        "weight": 0,
        "handlingGnd": 0,
        "handlingWtr": 0,
        "handlingAir": 0,
        "handlingGty": 0,
        "grip": 0,
        "miniturbo": 0.25,
        "invincibility": 0
    },
    {
        "items": [
            "Flame Rider",
            "Standard Bike"
        ],
        "speedGnd": -0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0.25,
        "acceleration": 0.25,
        "weight": -0.25,
        "handlingGnd": 0.25,
        "handlingWtr": 0.25,
        "handlingAir": 0,
        "handlingGty": 0.25,
        "grip": 0.5,
        "miniturbo": 0.25,
        "invincibility": -0.25
    },
    {
        "items": [
            "Biddybuggy",
            "Mr Scooty"
        ],
        "speedGnd": -0.75,
        "speedWtr": -0.5,
        "speedAir": -0.5,
        "speedGty": -0.25,
        "acceleration": 0.75,
        "weight": -0.5,
        "handlingGnd": 0.5,
        "handlingWtr": 0.5,
        "handlingAir": 0.25,
        "handlingGty": 0.5,
        "grip": 0.25,
        "miniturbo": 0.75,
        "invincibility": -0.75
    },
    {
        "items": [
            "Jet Bike",
            "Sport Bike"
        ],
        "speedGnd": 0.25,
        "speedWtr": 0,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": -0.5,
        "weight": -0.25,
        "handlingGnd": 0,
        "handlingWtr": 0.25,
        "handlingAir": 0,
        "handlingGty": -0.25,
        "grip": -0.25,
        "miniturbo": 0,
        "invincibility": 0,
        "insideDrift": true
    },
    {
        "items": [
            "Comet",
            "Yoshi Bike"
        ],
        "speedGnd": -0.25,
        "speedWtr": -0.25,
        "speedAir": 0.25,
        "speedGty": 0,
        "acceleration": 0.25,
        "weight": 0,
        "handlingGnd": 0.25,
        "handlingWtr": 0,
        "handlingAir": 0.25,
        "handlingGty": 0,
        "grip": 0,
        "miniturbo": 0.5,
        "invincibility": -0.25,
        "insideDrift": true
    },
    {
        "items": [
            "Master Cycle"
        ],
        "speedGnd": 0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": -0.5,
        "weight": 0,
        "handlingGnd": 0,
        "handlingWtr": 0,
        "handlingAir": -0.25,
        "handlingGty": 0,
        "grip": -0.75,
        "miniturbo": 0,
        "invincibility": 0,
        "insideDrift": true
    },
    {
        "items": [
            "Koopa Clown",
            "Master Cycle Zero"
        ],
        "speedGnd": 0,
        "speedWtr": 0.25,
        "speedAir": 0,
        "speedGty": 0,
        "acceleration": -0.5,
        "weight": 0.25,
        "handlingGnd": 0.25,
        "handlingWtr": 0.5,
        "handlingAir": 0,
        "handlingGty": 0,
        "grip": 1,
        "miniturbo": 0.25,
        "invincibility": 0
    },
    {
        "items": [
            "City Tripper",
            "Varmint"
        ],
        "speedGnd": -0.25,
        "speedWtr": 0,
        "speedAir": -0.5,
        "speedGty": -0.5,
        "acceleration": 0.5,
        "weight": -0.25,
        "handlingGnd": 0.5,
        "handlingWtr": 0.5,
        "handlingAir": -0.25,
        "handlingGty": 0.25,
        "grip": 0.25,
        "miniturbo": 0.5,
        "invincibility": -0.5
    },
    {
        "items": [
            "Standard ATV"
        ],
        "speedGnd": 0.5,
        "speedWtr": -0.25,
        "speedAir": -0.5,
        "speedGty": 0,
        "acceleration": -1,
        "weight": 0.5,
        "handlingGnd": -0.75,
        "handlingWtr": -0.25,
        "handlingAir": -0.75,
        "handlingGty": -0.5,
        "grip": 0.5,
        "miniturbo": -0.25,
        "invincibility": 0.75
    },
    {
        "items": [
            "Wild Wiggler"
        ],
        "speedGnd": -0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0.25,
        "acceleration": 0.25,
        "weight": -0.25,
        "handlingGnd": 0.25,
        "handlingWtr": 0.25,
        "handlingAir": 0,
        "handlingGty": 0.25,
        "grip": 0.5,
        "miniturbo": 0.25,
        "invincibility": -0.5
    },
    {
        "items": [
            "Cat Cruiser",
            "Teddy Buggy"
        ],
        "speedGnd": -0.25,
        "speedWtr": -0.25,
        "speedAir": 0.25,
        "speedGty": 0,
        "acceleration": 0.25,
        "weight": 0,
        "handlingGnd": 0.25,
        "handlingWtr": 0,
        "handlingAir": 0.25,
        "handlingGty": 0,
        "grip": 0,
        "miniturbo": 0.5,
        "invincibility": 0
    },
    {
        "items": [
            "Bone Rattler"
        ],
        "speedGnd": 0.25,
        "speedWtr": 0.5,
        "speedAir": -0.75,
        "speedGty": -0.25,
        "acceleration": -0.75,
        "weight": 0.5,
        "handlingGnd": -0.5,
        "handlingWtr": 0.75,
        "handlingAir": -0.5,
        "handlingGty": -0.5,
        "grip": 0,
        "miniturbo": -0.25,
        "invincibility": 0.5
    },
    	{
        "items": [
            "Splat Buggy"
        ],
        "speedGnd": 0.25,
        "speedWtr": -0.25,
        "speedAir": 0,
        "speedGty": 0.25,
        "acceleration": -0.25,
        "weight": -0.5,
        "handlingGnd": -0.25,
        "handlingWtr": 0.25,
        "handlingAir": -0.5,
        "handlingGty": 0.5,
        "grip": 0,
        "miniturbo": 0,
        "invincibility": 0
    },
    {
        "items": [
            "Inkstriker"
        ],
        "speedGnd": 0,
        "speedWtr": 0,
        "speedAir": 0.25,
        "speedGty": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handlingGnd": -0.25,
        "handlingWtr": 0,
        "handlingAir": -0.25,
        "handlingGty": 0.25,
        "grip": 0.25,
        "miniturbo": 0.25,
        "invincibility": 0
    }
];
