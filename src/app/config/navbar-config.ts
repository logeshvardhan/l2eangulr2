export var navConfig = {

    "imagesproductpath": "https://s3.ap-south-1.amazonaws.com/l2eassets/products",
    "imagescommonpath": "assets/images/common",
    "mainpg_firstblock": "Nutritional Food Value - Test",
    "services_host_name": "http://ec2-35-154-65-5.ap-south-1.compute.amazonaws.com:8070",
    "dynamic_htmls_src": "app/entities/product/dynahtmls/",
    "common_pagesize": "12",
    "max_slice": "10",
    "Nutri_Categories": [
        {
            "name": "Carbohydrates",
            "toState": "carbohydrates",
            "nutriImg": "carbohydrates-sub.jpg",
            "nutriImg2": "carbohydrates-sub-hover.jpg"
        },
        {
            "name": "Fats",
            "toState": "fats",
            "nutriImg": "fats-sub.jpg",
            "nutriImg2": "fats-sub-hover.jpg"
        },
        {
            "name": "Proteins",
            "toState": "proteins",
            "nutriImg": "proteins-sub.jpg",
            "nutriImg2": "proteins-sub-hover.jpg"
        },
        {
            "name": "Vitamins",
            "toState": "vitamins",
            "nutriImg": "vitamins-sub.jpg",
            "nutriImg2": "vitamins-sub-hover.jpg"
        },
        {
            "name": "Minerals",
            "toState": "minerals",
            "nutriImg": "minerals-sub.jpg",
            "nutriImg2": "minerals-sub-hover.jpg"
        }
    ],
    "Diet_Groups": [
        {
            "grpName": "Eat Adequately",
            "toState": "higconspgrp",
            "grpImg": "fast-food.png"
        },
        {
            "grpName": "Eat Moderately",
            "toState": "medconspgrp",
            "grpImg": "eating.png"
        },
        {
            "grpName": "Eat Limited",
            "toState": "lowconspgrp",
            "grpImg": "spoon-and-fork-on-a-plate.png"
        },
        {
            "grpName": "Restricted",
            "toState": "restrictedgrp",
            "grpImg": "34966.png"
        },
        {
            "grpName": "Unclassified",
            "toState": "unspecified",
            "grpImg": "man-thinking.png"
        }
    ],
    "Diet_Reco": [
        {
            "Type": "MEDCOND",
            "Type_Name": "Medical Condition",
            "tab_image": "medical-condition-sub.jpg",
            "tab_image2": "medical-condition-sub-hover.jpg",
            "toState": "medical-condition",
            "paneId": "MEDCOND",
            "active": true,
            "Values": [
                {
                    "condition": "Diabetic",
                    "image": "diabetic.png"
                },
                {
                    "condition": "Obesity",
                    "image": "obesity.png"
                },
                {
                    "condition": "Pregnant",
                    "image": "pregnant.png"
                },
                {
                    "condition": "Breast Feeding Mother",
                    "image": "breast-feeding.png"
                }
            ]
        },
        {
            "Type": "AGE",
            "Type_Name": "Age & Gender",
            "tab_image": "age-gender-sub.jpg",
            "tab_image2": "age-gender-sub-hover.jpg",
            "toState": "age-and-gender",
            "paneId": "AGE",
            "active": false,
            "Values": [
                {
                    "condition": "Infant (0-6 months)",
                    "image": "infant.jpg"
                },
                {
                    "condition": "Kid (7 months - 4 yrs)",
                    "image": "kids4yr.jpg"
                },
                {
                    "condition": "Kid (5 Yrs - 12 Yrs)",
                    "image": "kids7yr.png"
                },
                {
                    "condition": "Teen (13 - 18 Yrs)",
                    "image": "teen.png"
                },
                {
                    "condition": "Adult (19 - 30 Yrs)",
                    "image": "young_adult.jpg"
                },
                {
                    "condition": "Adult (31 - 45 Yrs)",
                    "image": "family.png"
                },
                {
                    "condition": "Adult (46 - 60 Yrs)",
                    "image": "couple-1.png"
                },
                {
                    "condition": "Elder (60 - 80 Yrs)",
                    "image": "old_couple1.png"
                },
                {
                    "condition": "Elder (81+ Yrs)",
                    "image": "old_couple2.jpg"
                },
                {
                    "condition": "Male",
                    "image": "male.jpg"
                },
                {
                    "condition": "Female",
                    "image": "female.jpg"
                },
                {
                    "condition": "Other Gender",
                    "image": "3rdgender.jpg"
                }
            ]
        },
        {
            "Type": "GOAL",
            "Type_Name": "Goal",
            "tab_image": "goal-sub.jpg",
            "tab_image2": "goal-sub-hover.jpg",
            "toState": "goals",
            "paneId": "GOAL",
            "active": false,
            "Values": [
                {
                    "condition": "Weight Gain",
                    "image": "weight-gain.png"
                },
                {
                    "condition": "Weight Loss",
                    "image": "weight-loss.jpg"
                },
                {
                    "condition": "Stamina",
                    "image": "strength.png"
                },
                {
                    "condition": "Fairness",
                    "image": "bride-1.png"
                },
                {
                    "condition": "Hair Growth",
                    "image": "boy-2.png"
                },
                {
                    "condition": "Resistance/Immunity",
                    "image": "immune-system.jpg"
                },
                {
                    "condition": "Body Building",
                    "image": "weightlifter.png"
                }
            ]
        },
        {
            "Type": "WORK",
            "Type_Name": "Nature of Work",
            "tab_image": "nature-of-work-sub.jpg",
            "tab_image2": "nature-of-work-sub-hover.jpg",
            "toState": "nature-of-work",
            "paneId": "WORK",
            "active": false,
            "Values": [
                {
                    "condition": "Information Technology",
                    "image": "smartphone.png"
                },
                {
                    "condition": "Construction",
                    "image": "helmet.png"
                },
                {
                    "condition": "Banking & Financial Services",
                    "image": "cash.png"
                },
                {
                    "condition": "Farmer",
                    "image": "farmer.png"
                },
                {
                    "condition": "Daily Labor",
                    "image": "fist.png"
                },
                {
                    "condition": "Civil Servant",
                    "image": "businessman.png"
                },
                {
                    "condition": "Defence",
                    "image": "soldier.png"
                }
            ]
        }
    ],
    "main_menu": [
        {
            "Menu_ID": "1",
            "Menu_Item": "Nutritional Values In",
            "menuToState": "categories",
            "Sub_Menu": [
                {
                    "smenu_item": "Fruits & Vegetables",
                    "mnuimage": "apple-2.png",
                    "mnuimage2": "fruits-vegetables.png",
                    "productclass": "FRUVEG",
                    "mainfilter": "prodclass",
                    "toState": "/list/prodclass~FRUVEG~eq;/filter/prodclass/and/1"
                },
                {
                    "smenu_item": "Dairy",
                    "mnuimage": "milk-box_icon.png",
                    "mnuimage2": "dairy-2.png",
                    "productclass": "DAIRY",
                    "mainfilter": "prodclass",
                    "toState": "/list/prodclass~DAIRY~eq;/filter/prodclass/and/1"
                },
                {
                    "smenu_item": "Cereals & Pulses",
                    "mnuimage": "cereals-3.png",
                    "mnuimage2": "cereals-4.png",
                    "productclass": "CERPUL",
                    "toState": "/list/prodclass~CERPUL~eq;/filter/prodclass/and/1"
                },
                {
                    "smenu_item": "Meat",
                    "mnuimage": "meat_icon.png",
                    "mnuimage2": "meat-2.png",
                    "productclass": "MEAT",
                    "mainfilter": "prodclass",
                    "toState": "/list/prodclass~MEAT~eq;/filter/prodclass/and/1"
                },
                {
                    "smenu_item": "Oil & Ghee",
                    "mnuimage": "oil_icon.png",
                    "mnuimage2": "oil-2.png",
                    "productclass": "EDOGHE",
                    "mainfilter": "prodclass",
                    "toState": "/list/prodclass~EDOGHE~eq;/filter/prodclass/and/1"
                },
                {
                    "smenu_item": "Masalas & Spices",
                    "mnuimage": "salt-and-pepper_icon.png",
                    "mnuimage2": "spices-2.png",
                    "productclass": "MASSPI",
                    "toState": "/list/prodclass~MASSPI~eq;/filter/prodclass/and/1"
                },
                {
                    "smenu_item": "Rice & Wheat",
                    "mnuimage": "rice-3.png",
                    "mnuimage2": "rice-6.png",
                    "productclass": "RICWHE",
                    "mainfilter": "prodclass",
                    "toState": "/list/prodclass~RICWHE~eq;/filter/prodclass/and/1"
                },
                {
                    "smenu_item": "Salt,Sugar,Jaggary & Honey",
                    "mnuimage": "salt-1.png",
                    "mnuimage2": "salt-3.png",
                    "productclass": "SSUJAG",
                    "mainfilter": "prodclass",
                    "toState": "/list/prodclass~SSUJAG~eq;/filter/prodclass/and/1"
                }
            ]
        },
        {
            "Menu_ID": "2",
            "Menu_Item": "Diet Recommendations By",
            "menuToState": "diet-recommendation",
            "Sub_Menu": [
                {
                    "smenu_item": "Medical Condition",
                    "mnuimage": "pharmacy_icon.png",
                    "mnuimage2": "pills (1).png",
                    "mainfilter": "dietclass",
                    "toState": "diet-recommendation/medical-condition"
                },
                {
                    "smenu_item": "Age & Gender",
                    "mnuimage": "family-of-three.png",
                    "mnuimage2": "pregnancy-with-hearts.png",
                    "mainfilter": "dietclass",
                    "toState": "diet-recommendation/age-and-gender"
                },
                {
                    "smenu_item": "Goal",
                    "mnuimage": "kids-couple_icon.png",
                    "mnuimage2": "kids-couple.png",
                    "toState": "diet-recommendation/goals"
                },
                {
                    "smenu_item": "Nature of Work",
                    "mnuimage": "old-age-man_icon.png",
                    "mnuimage2": "old-age-man.png",
                    "mainfilter": "dietclass",
                    "toState": "diet-recommendation/nature-of-work"
                }
            ]
        },
        {
            "Menu_ID": "3",
            "Menu_Item": "Foods that have",
            "menuToState": "nutrients",
            "Sub_Menu": [
                {
                    "smenu_item": "Carbohydrates",
                    "mnuimage": "wheat-waste-to-bio-mass_icon.png",
                    "mnuimage2": "chicken-leg.png",
                    "mainfilter": "nutriclass",
                    "toState": "nutrients/carbohydrates"
                },
                {
                    "smenu_item": "Fats",
                    "mnuimage": "cheese_icon.png",
                    "mnuimage2": "cheese.png",
                    "mainfilter": "nutriclass",
                    "toState": "nutrients/fats"
                },
                {
                    "smenu_item": "Protein",
                    "mnuimage": "fresh-juice_icon.png",
                    "mnuimage2": "fruit-salad.png",
                    "toState": "nutrients/proteins"
                },
                {
                    "smenu_item": "Vitamins",
                    "mnuimage": "fish_icon.png",
                    "mnuimage2": "fish.png",
                    "mainfilter": "nutriclass",
                    "toState": "nutrients/vitamins"
                },
                {
                    "smenu_item": "Minerals",
                    "mnuimage": "sparkling-water_icon.png",
                    "mnuimage2": "sparkling-water.png",
                    "mainfilter": "nutriclass",
                    "toState": "nutrients/minerals"
                }
            ]
        },
        {
            "Menu_ID": "4",
            "Menu_Item": "Health Recommendation for",
            "menuToState": "health-recommendation",
            "Sub_Menu": [
                {
                    "smenu_item": "Heart",
                    "mnuimage": "heart-checkup_icon.png",
                    "mnuimage2": "heart-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Heart\"]~in;/filter/bodypartclass/and/1"
                },
                {
                    "smenu_item": "Liver",
                    "mnuimage": "liver-organ-inside-the-abdomen-outline_icon.png",
                    "mnuimage2": "liver-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Liver\"]~in;/filter/bodypartclass/and/1"
                },
                {
                    "smenu_item": "Eye",
                    "mnuimage": "observation_icon.png",
                    "mnuimage2": "eye-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Eye\"]~in;/filter/bodypartclass/and/1"
                },
                {
                    "smenu_item": "Hair",
                    "mnuimage": "one-hair_icon.png",
                    "mnuimage2": "hair-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Hair\"]~in;/filter/bodypartclass/and/1"
                },
                {
                    "smenu_item": "Skin",
                    "mnuimage": "claw-bath-in-spa_icon.png",
                    "mnuimage2": "skin-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Skin\"]~in;/filter/bodypartclass/and/1"
                },
                {
                    "smenu_item": "Blood",
                    "mnuimage": "transfusion_icon.png",
                    "mnuimage2": "blood-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Blood\"]~in;/filter/bodypartclass/and/1"
                },
                {
                    "smenu_item": "Lungs",
                    "mnuimage": "lungs-shape-in-a-circle-on-a-human-body_icon.png",
                    "mnuimage2": "lungs-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Lungs\"]~in;/filter/bodypartclass/and/1"
                },
                {
                    "smenu_item": "Kidney",
                    "mnuimage": "kidneys_icon.png",
                    "mnuimage2": "kidney-2.png",
                    "mainfilter": "bodypartclass",
                    "toState": "/list/goodbodypart~[\"Kidney\"]~in;/filter/bodypartclass/and/1"
                }
            ]
        }
    ]
}