// PUT ALL THIS BACK INTO APP.JS AT THE TOP


var E_pubs;
var F_E_pubs;
var N_pubs;
var pub_1 = L.marker([51.09282, -1.16111]).bindPopup('The Globe<br><a href="https://www.theglobealresford.com/" target="blank">website</a>'),
    pub_2 = L.marker([51.08584, -1.27158]).bindPopup('The Cricketers'),
    pub_3 = L.marker([51.09243, -1.23703]).bindPopup('The Plough'),
    pub_4 = L.marker([51.00686, -1.27188]).bindPopup('The Ship'),
    pub_5 = L.marker([51.05105, -1.17203]).bindPopup('The Flowerpots'),
    pub_6 = L.marker([50.98237, -1.23221]).bindPopup('The Brushmakers Arms'),
    pub_7 = L.marker([50.99313, -1.32784]).bindPopup('The Dog and Crook'),
    pub_8 = L.marker([51.0469, -1.12422]).bindPopup('The Fox'),
    pub_9 = L.marker([51.0471, -1.15896]).bindPopup('The Hinton Arms'),
    pub_10 = L.marker([50.94736, -1.13225]).bindPopup('The White Lion'),
    pub_11 = L.marker([50.99545, -1.39405]).bindPopup('The Hiltonbury Farmhouse'),
    pub_12 = L.marker([51.02372, -1.3911]).bindPopup('The Dolphin'),
    pub_13 = L.marker([51.14675, -1.26294]).bindPopup('The Half Moon and Spread Eagle'),
    pub_14 = L.marker([51.15211, -1.32385]).bindPopup('The Wonston Arms'),
    pub_15 = L.marker([51.07999, -1.37559]).bindPopup('The Plough'),
    pub_16 = L.marker([51.0205, -1.46615]).bindPopup('The Wheatsheaf'),
    pub_17 = L.marker([51.06434, -1.30819]).bindPopup('The Willow Tree'),
    pub_18 = L.marker([51.06927, -1.31493]).bindPopup('Hyde Tavern'),
    pub_19 = L.marker([51.06957, -1.31323]).bindPopup('The King Alfred'),
    pub_20 = L.marker([51.05456, -1.31784]).bindPopup('The Queen Inn'),
    pub_21 = L.marker([51.0205, -1.46615]).bindPopup('The Wheatsheaf'),
    pub_22 = L.marker([51.08984, -1.29593]).bindPopup('The Cart and Horses'),
    pub_23 = L.marker([51.04815, -1.32336]).bindPopup('The Bell'),
    pub_24 = L.marker([51.16624, -1.44481]).bindPopup('The White Lion'),
    pub_25 = L.marker([51.1325, -1.48701]).bindPopup('The Peat Spade'),
    pub_26 = L.marker([51.07742, -1.48752]).bindPopup('The Crown'),
    pub_27 = L.marker([50.99844, -1.46981]).bindPopup('The Hunters'),
    pub_28 = L.marker([51.16698, -1.37901]).bindPopup('The Swan'),
    pub_29 = L.marker([51.15774, -1.43972]).bindPopup('The Abbots Mitre'),
    pub_30 = L.marker([50.99853, -1.35402]).bindPopup('The Otter'),
    pub_31 = L.marker([51.057813, -1.307315]).bindPopup('The Black Boy'),
    pub_32 = L.marker([50.983989, -1.128866]).bindPopup('The Shoe Inn'),
    //NEW FOREST PUBS
    pub_33 = L.marker([50.905705, -1.539084]).bindPopup('The Gamekeeper'),
    pub_34 = L.marker([50.925304, -1.612646]).bindPopup('The Green Dragon'),
    pub_35 = L.marker([50.926207, -1.670963]).bindPopup('The Royal Oak'),
    pub_36 = L.marker([50.933835, -1.750667]).bindPopup('The Fighting Cocks'),
    pub_37 = L.marker([50.918876, -1.573405]).bindPopup('The Coach and Horses'),
    pub_38 = L.marker([50.890487, -1.5271]).bindPopup('The New Forest'),
    pub_39 = L.marker([50.874824, -1.465409]).bindPopup('The Bold Forester'),
    pub_40 = L.marker([50.85455, -1.503839]).bindPopup('The Drift Inn'),
    pub_41 = L.marker([50.802287, -1.470215]).bindPopup('The Turfcutters'),
    pub_42 = L.marker([50.895711, -1.721699]).bindPopup('The High Corner Inn'),
    pub_43 = L.marker([50.954744, -1.640943]).bindPopup('The Lamb'),
    pub_44 = L.marker([50.975886, -1.654236]).bindPopup('The Cuckoo'),
    pub_45 = L.marker([50.913248, -1.61926]).bindPopup('The Sir Walter Tyrell'),
    pub_46 = L.marker([50.871885, -1.774871]).bindPopup('The Alice Lisle'),
    pub_47 = L.marker([50.883421, -1.734767]).bindPopup('The Redshoot'),
    pub_48 = L.marker([50.826447, -1.431613]).bindPopup('The Royal Oak'),
    pub_49 = L.marker([50.826901, -1.339967]).bindPopup('The Jolly Sailor'),
    pub_50 = L.marker([50.834294, -1.395264]).bindPopup('The Old Mill'),
    pub_51 = L.marker([50.877369, -1.579049]).bindPopup('The Waterloo'),
    pub_52 = L.marker([50.801365, -1.572118]).bindPopup('The Filly Inn'),
    pub_53 = L.marker([50.790419, -1.565917]).bindPopup('The Hobler'),


    pub_54 = L.marker([50.91197, -1.481234]).bindPopup('The Anchor'),
    pub_55 = L.marker([50.924327, -1.487467]).bindPopup('The Salmon Leap'),
    pub_56 = L.marker([50.931036, -1.503775]).bindPopup('The Testwood'),
    pub_57 = L.marker([51.07201, -1.507874]).bindPopup('The John of Gaunt'),
    pub_58 = L.marker([51.166145, -1.444788]).bindPopup('The White Lion'),
    pub_59 = L.marker([51.244537, -1.260939]).bindPopup('The Old House at Home'),
    pub_60 = L.marker([51.092378, -1.23697]).bindPopup('The Plough'),
    pub_61 = L.marker([51.022306, -1.32691]).bindPopup('The Bridge Inn'),
    pub_62 = L.marker([50.881634, -1.304262]).bindPopup('The Jolly Sailor'),
    pub_63 = L.marker([50.852315, -1.305871]).bindPopup('The Rising Sun'),
    pub_64 = L.marker([50.92522, -1.142213]).bindPopup('The Bold Forester'),
    pub_65 = L.marker([50.938091, -1.361543]).bindPopup('The White Swan'),
    pub_66 = L.marker([51.083145, -1.200385]).bindPopup('The Bush'),
    pub_67 = L.marker([50.824037, -1.684787]).bindPopup('The White Buck'),
    pub_68 = L.marker([50.863374, -1.595061]).bindPopup('The Oak Inn'),
    pub_69 = L.marker([50.784366, -1.657074]).bindPopup('The Rising Sun'),
    pub_70 = L.marker([50.970995, -1.591623]).bindPopup('The Red Rover'),
    pub_71 = L.marker([51.012698, -1.647064]).bindPopup('The Parish Lantern'),
    pub_72 = L.marker([51.017102, -1.316176]).bindPopup('The Phoenix'),
    pub_73 = L.marker([50.999618, -1.586221]).bindPopup('The Hatchet'),
    pub_74 = L.marker([50.92522, -1.142213]).bindPopup('The '),
    pub_75 = L.marker([50.938091, -1.361543]).bindPopup('The ');

var pubs = L.layerGroup([pub_1, pub_2, pub_3, pub_4, pub_5, pub_6, pub_7, pub_8, pub_9, pub_10, pub_11, pub_12, pub_13, pub_14, pub_15, pub_16, pub_17, pub_18, pub_19, pub_20, pub_21, pub_22, pub_23, pub_24, pub_25, pub_26, pub_27, pub_28, pub_29, pub_30, pub_31, pub_32, pub_33, pub_34, pub_35, pub_36, pub_37, pub_38, pub_39, pub_40, pub_41, pub_42, pub_43, pub_44, pub_45, pub_46, pub_46, pub_47, pub_48, pub_49, pub_50, pub_51, pub_52, pub_53, pub_54, pub_55, pub_56, pub_57, pub_58, pub_59, pub_60, pub_61, pub_62, pub_63, pub_64, pub_65, pub_66, pub_67, pub_68, pub_69, pub_70, pub_71, pub_72, pub_73, pub_74, pub_75, ]);
var b_pubs = L.layerGroup([pub_5, pub_6, pub_7, pub_8, pub_9, pub_10, ]);

var w_pubs = L.layerGroup([pub_1, pub_2, pub_10, pub_25, pub_17, pub_29, pub_32, pub_14, pub_30, pub_46, pub_49, pub_54, pub_55, pub_56, pub_57, pub_58, pub_59, pub_60, pub_61, pub_62, pub_63, pub_64, pub_65, pub_66, pub_72, ]);

var f_pubs = L.layerGroup([pub_5, pub_6, pub_7, pub_8, pub_9, pub_10, ]);

var nf_pubs = L.layerGroup([pub_33, pub_34, pub_35, pub_36, pub_37, pub_38, pub_39, pub_40, pub_41, pub_42, pub_43, pub_44, pub_45, pub_46, pub_46, pub_47, pub_48, pub_49, pub_50, pub_51, pub_52, pub_53, pub_67, pub_68, pub_69]);

var cp = L.layerGroup([pub_5, pub_6, pub_7, pub_8, pub_9, pub_10, ]);
var city_pubs = L.layerGroup([pub_17, pub_18, pub_19, pub_20, pub_31, ]);