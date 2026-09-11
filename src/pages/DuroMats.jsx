import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './DuroMats.css'
import duroBanner from '../assets/DURO/Duro Banner.png'
import duroBannerMobile from '../assets/DURO/Duro Banner R.png'

import duroProduct1 from '../assets/DURO/durosoft matting/Duro Soft Economy -12mm PVC Floor Mat/Duro Soft Economy -12mm PVC Floor Mat 1.webp'
import duroProduct2 from '../assets/DURO/durosoft matting/Duro Soft Economy -12mm PVC Floor Mat/Duro Soft Economy -12mm PVC Floor Mat 2.webp'
import duroProduct3 from '../assets/DURO/durosoft matting/Duro Soft Economy -12mm PVC Floor Mat/Duro Soft Economy -12mm PVC Floor Mat 3.webp'
import duroProduct4 from '../assets/DURO/durosoft matting/Duro Soft Economy -12mm PVC Floor Mat/Duro Soft Economy -12mm PVC Floor Mat 4.webp'
import duroProduct5 from '../assets/DURO/durosoft matting/Duro Soft Economy -12mm PVC Floor Mat/Duro Soft Economy -12mm PVC Floor Mat 5.webp'

import duroProduct6 from '../assets/DURO/durosoft matting/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat 1.webp'
import duroProduct7 from '../assets/DURO/durosoft matting/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat 2.webp'
import duroProduct8 from '../assets/DURO/durosoft matting/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat 3.webp'
import duroProduct9 from '../assets/DURO/durosoft matting/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat 4.webp'
import duroProduct10 from '../assets/DURO/durosoft matting/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat/Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat 5.webp'

import duroProduct11 from '../assets/DURO/durosoft matting/Duro Soft Premium -14 mm PVC Floor Mat/Duro Soft Premium -14 mm PVC Floor Mat 1.webp'
import duroProduct12 from '../assets/DURO/durosoft matting/Duro Soft Premium -14 mm PVC Floor Mat/Duro Soft Premium -14 mm PVC Floor Mat 2.webp'
import duroProduct13 from '../assets/DURO/durosoft matting/Duro Soft Premium -14 mm PVC Floor Mat/Duro Soft Premium -14 mm PVC Floor Mat 3.webp'
import duroProduct14 from '../assets/DURO/durosoft matting/Duro Soft Premium -14 mm PVC Floor Mat/Duro Soft Premium -14 mm PVC Floor Mat 4.webp'
import duroProduct15 from '../assets/DURO/durosoft matting/Duro Soft Premium -14 mm PVC Floor Mat/Duro Soft Premium -14 mm PVC Floor Mat 5.webp'

import duroProduct16 from '../assets/DURO/durosoft matting/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat 1.webp'
import duroProduct17 from '../assets/DURO/durosoft matting/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat 2.webp'
import duroProduct18 from '../assets/DURO/durosoft matting/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat 3.webp'
import duroProduct19 from '../assets/DURO/durosoft matting/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat 4.webp'
import duroProduct20 from '../assets/DURO/durosoft matting/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat/Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat 5.webp'




import duroProduct21 from '../assets/DURO/duroturf lite/Duro Turf Lite - 12mm Synthetic Floor Mat/Duro Turf Lite - 12mm Synthetic Floor Mat 1.webp'
import duroProduct22 from '../assets/DURO/duroturf lite/Duro Turf Lite - 12mm Synthetic Floor Mat/Duro Turf Lite - 12mm Synthetic Floor Mat 2.webp'
import duroProduct23 from '../assets/DURO/duroturf lite/Duro Turf Lite - 12mm Synthetic Floor Mat/Duro Turf Lite - 12mm Synthetic Floor Mat 3.webp'
import duroProduct24 from '../assets/DURO/duroturf lite/Duro Turf Lite - 12mm Synthetic Floor Mat/Duro Turf Lite - 12mm Synthetic Floor Mat 4.webp'
import duroProduct25 from '../assets/DURO/duroturf lite/Duro Turf Lite - 12mm Synthetic Floor Mat/Duro Turf Lite - 12mm Synthetic Floor Mat 5.webp'

import duroProduct26 from '../assets/DURO/duroturf lite/Duro Turf Lite Plus -16mm Synthetic Floor Mat/Duro Turf Lite Plus -16mm Synthetic Floor Mat 1.webp'
import duroProduct27 from '../assets/DURO/duroturf lite/Duro Turf Lite Plus -16mm Synthetic Floor Mat/Duro Turf Lite Plus -16mm Synthetic Floor Mat 2.webp'
import duroProduct28 from '../assets/DURO/duroturf lite/Duro Turf Lite Plus -16mm Synthetic Floor Mat/Duro Turf Lite Plus -16mm Synthetic Floor Mat 3.webp'
import duroProduct29 from '../assets/DURO/duroturf lite/Duro Turf Lite Plus -16mm Synthetic Floor Mat/Duro Turf Lite Plus -16mm Synthetic Floor Mat 4.webp'
import duroProduct30 from '../assets/DURO/duroturf lite/Duro Turf Lite Plus -16mm Synthetic Floor Mat/Duro Turf Lite Plus -16mm Synthetic Floor Mat 5.webp'

import duroProduct31 from '../assets/DURO/duroturf lite/Duro Turf Premium - 16mm Synthetic Floor Mat/Duro Turf Premium - 16mm Synthetic Floor Mat 1.webp'
import duroProduct32 from '../assets/DURO/duroturf lite/Duro Turf Premium - 16mm Synthetic Floor Mat/Duro Turf Premium - 16mm Synthetic Floor Mat 2.webp'
import duroProduct33 from '../assets/DURO/duroturf lite/Duro Turf Premium - 16mm Synthetic Floor Mat/Duro Turf Premium - 16mm Synthetic Floor Mat 3.webp'
import duroProduct34 from '../assets/DURO/duroturf lite/Duro Turf Premium - 16mm Synthetic Floor Mat/Duro Turf Premium - 16mm Synthetic Floor Mat 4.webp'
import duroProduct35 from '../assets/DURO/duroturf lite/Duro Turf Premium - 16mm Synthetic Floor Mat/Duro Turf Premium - 16mm Synthetic Floor Mat 5.webp'





import duroProduct36 from '../assets/DURO/durowipe/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat 1.webp'
import duroProduct37 from '../assets/DURO/durowipe/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat 2.webp'
import duroProduct38 from '../assets/DURO/durowipe/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat 3.webp'
import duroProduct39 from '../assets/DURO/durowipe/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat 4.webp'
import duroProduct40 from '../assets/DURO/durowipe/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat/Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat 5.webp'

import duroProduct41 from '../assets/DURO/durowipe/Duro Wipe Premium - 5.5mm PVC Floor Mat/Duro Wipe Premium - 5.5mm PVC Floor Mat 1.webp'
import duroProduct42 from '../assets/DURO/durowipe/Duro Wipe Premium - 5.5mm PVC Floor Mat/Duro Wipe Premium - 5.5mm PVC Floor Mat 2.webp'
import duroProduct43 from '../assets/DURO/durowipe/Duro Wipe Premium - 5.5mm PVC Floor Mat/Duro Wipe Premium - 5.5mm PVC Floor Mat 3.webp'
import duroProduct44 from '../assets/DURO/durowipe/Duro Wipe Premium - 5.5mm PVC Floor Mat/Duro Wipe Premium - 5.5mm PVC Floor Mat 4.webp'
import duroProduct45 from '../assets/DURO/durowipe/Duro Wipe Premium - 5.5mm PVC Floor Mat/Duro Wipe Premium - 5.5mm PVC Floor Mat 5.webp'

import duroProduct46 from '../assets/DURO/durowipe/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat 1.webp'
import duroProduct47 from '../assets/DURO/durowipe/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat 2.webp'
import duroProduct48 from '../assets/DURO/durowipe/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat 3.webp'
import duroProduct49 from '../assets/DURO/durowipe/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat 4.webp'
import duroProduct50 from '../assets/DURO/durowipe/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat/Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat 5.webp'

import duroProduct51 from '../assets/DURO/durowipe/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat 1.webp'
import duroProduct52 from '../assets/DURO/durowipe/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat 2.webp'
import duroProduct53 from '../assets/DURO/durowipe/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat 3.webp'
import duroProduct54 from '../assets/DURO/durowipe/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat 4.webp'
import duroProduct55 from '../assets/DURO/durowipe/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat/Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat 5.webp'



function DuroMats() {

  const [selectedCategory, setSelectedCategory] = useState('DURO FLOOR MATS')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams()


  const categories = [
    'DURO FLOOR MATS',
    'DUROWIPE',
    'DURO TURF LITE',
  ]


  const products = {

    /* =========================
       CATEGORY 1
    ========================= */

    'DURO FLOOR MATS': [

      {
        name: 'Duro Soft Economy -12mm PVC Floor Mat',

        images: [
          duroProduct1,
          duroProduct2,
          duroProduct3,
          duroProduct4,
          duroProduct5,
        ],

        productCode: 'DSE-12',

        availability: 'In Stock',

        price: '₹ 45/sqft Piece',

        description:
          'DuroWipe is made from high grade polymer & it comes with an unique “Twin Blade Technology”, which has the ability to wipe out water/moisture & suck out dust from the footwear/feet in one single wipe. It’s wavy and an undulated combination of aesthetics, strength & durability. Application Areas Entrances – Lobbies, Passages, Corridors, Pathways Indoors/Outdoors – Airports, Malls, Corporate Corridors, Restaurants, Theaters, Clubs, Health Spas, Temples & Gurudwaras Households – Swimming Pools, Bathrooms, Shower Cubicles, Trains & Luxury Coaches',

      
        specifications: [
          {
            label: 'Mat Type',
            value: 'Entrance Mat',
          },
          {
            label: 'Construction',
            value: 'Extruded PVC Coil/Loop',
          },
          {
            label: 'Thickness',
            value: '12 mm',
          },
          {
            label: 'Roll Width',
            value: '4 ft',
          },
          {
            label: 'Surface Finish',
            value: 'Loop/Noodle Mat',
          },
          {
            label: 'Usage Area',
            value: 'Home, Industrial, Car, Office',
          },
          {
            label: 'Color',
            value: 'Green',
          },
          {
            label: 'Features',
            value: 'Insulating, Waterproof, Easy Clean',
          },
          {
            label: 'Sheet Thickness',
            value: '0.7 mm',
          },
          {
            label: 'Size',
            value: '1.2 x 15 Mtrs / 0.6 x 15 Mtrs',
          },
        ],
      },


      {
        name: 'Duro Soft HD (Heavy Duty) -18mm PVC Floor Mat',

        images: [
          duroProduct6,
          duroProduct7,
          duroProduct8,
          duroProduct9,
          duroProduct10,
        ],

       productCode: 'DSE-18',

        availability: 'In Stock',

        price: '₹ 195/sqft  Piece',

        description:
          'Durosoft’s Random Loop Structure with its higher dirt scrapping capacity, aggressively scrapes away dirt & muck and hides it beneath. Durosoft mats provide elegance and efficiency. They are available in many attractive colours. Its flossy base offers a soft cushioning support to the feet giving relief from foot fatigue. Application Areas are Corporate Offices, ATMs, Hospitals, Temples, Gurudwaras, Fuel Stations, Hotels, Airport, Shopping Malls, Elevators, Conference Centre & Auditorium, Multiplexes',

      
        specifications: [
          
          {
            label: 'Mat Type',
            value: 'Entrance Mat',
          },
          {
            label: 'Construction',
            value: 'Extruded PVC Coil/Loop',
          },
          {
            label: 'Thickness',
            value: '18 mm',
          },
          {
            label: 'Roll Width',
            value: '4 ft',
          },
          {
            label: 'Surface Finish',
            value: 'Loop/Noodle Mat',
          },
          {
            label: 'Usage Area',
            value: 'Industrial, Office, Hotels, Workshop',
          },
          {
            label: 'Features',
            value: 'Easy Clean, Anti Skid, Insulating, Waterproof',
          },
          {
            label: 'Sheet Thickness',
            value: '1.5 mm',
          },
          {
            label: 'Colors',
            value: '	Marron, Grey, Red',
          },
        ],
      },


        {
        name: 'Duro Soft Premium -14 mm PVC Floor Mat',

        images: [
          duroProduct11,
          duroProduct12,
          duroProduct13,
          duroProduct14,
          duroProduct15,
        ],

        productCode: 'DSE-14',

        availability: 'In Stock',

        description:
          'Durosoft’s Random Loop Structure with its higher dirt scrapping capacity, aggressively scrapes away dirt & muck and hides it beneath. Durosoft mats provide elegance and efficiency. They are available in many attractive colours. Its flossy base offers a soft cushioning support to the feet giving relief from foot fatigue.',

        price: '₹ 95/sqft  Piece',

        specifications: [
         {
            label: 'Mat Type',
            value: 'Entrance Mat',
          },
          {
            label: 'Surface Material',
            value: 'PVC',
          },
          {
            label: 'Construction',
            value: 'Extruded PVC Coil/Loop',
          },
          {
            label: 'Thickness',
            value: '14 mm',
          },
          {
            label: 'GSM',
            value: '5920',
          },
          {
            label: 'Roll Width',
            value: '4 ft',
          },
          {
            label: 'Surface Finish',
            value: 'Loop/Noodle Mat',
          },
          {
            label: 'Usage Area',
            value: 'Offices, Hotels, Hospitals, Shopping Malls, Temples, Gurudwaras',
          },
          {
            label: 'Color',
            value: 'Green, Red, Blue, Grey, Marron, Beige, Black',
          },
          {
            label: 'Features',
            value: 'Easy Clean, Waterproof, Insulating, Anti Skid',
          },
          {
            label: 'Sheet Thickness',
            value: '1 mm',
          },
          {
            label: 'Size',
            value: '1.2 m × 10 m',
          },
        ],
      },


        {
        name: 'Duro Soft UHD (Ultra Heavy Duty) -20mm PVC Floor Mat',

        images: [
          duroProduct16,
          duroProduct17,
          duroProduct18,
          duroProduct19,
          duroProduct20,
        ],

        productCode: 'DSE-20',

        availability: 'In Stock',

        description:
          'Durosoft’s Random Loop Structure with its higher dirt scrapping capacity, aggressively scrapes away dirt & muck and hides it beneath. Durosoft mats provide elegance and efficiency. They are available in many attractive colours. Its flossy base offers a soft cushioning support to the feet giving relief from foot fatigue. Application Areas are Corporate Offices, ATMs, Hospitals, Temples, Gurudwaras, Fuel Stations, Hotels, Airport, Shopping Malls, Elevators, Conference Centre & Auditorium, Multiplexes.',

        price: '₹ 145/sqft  Piece',

        specifications: [
         {
            label: 'Construction',
            value: 'Extruded PVC Coil/Loop',
          },
          {
            label: 'Thickness',
            value: '20 mm',
          },
          {
            label: 'Surface Finish',
            value: 'Loop/Noodle Mat',
          },
          {
            label: 'Roll Width',
            value: '4 ft',
          },
          {
            label: 'Surface Finish',
            value: 'Loop/Noodle Mat',
          },
          {
            label: 'Usage Area',
            value: 'Industrial, Gym, Workshop, Office, Home, Car',
          },
          {
            label: 'Color',
            value: 'Marron, Grey, Red',
          },
          {
            label: 'Features',
            value: 'Easy Clean, Waterproof, Insulating, Anti Skid',
          },
          {
            label: 'Sheet Thickness',
            value: '2 mm',
          },
          {
            label: 'Size',
            value: '1.2 x 5 Mtrs',
          },
        ],
      },

    ],


    /* =========================
       CATEGORY 2
    ========================= */

    'DUROWIPE': [

      {
        name: 'Duro Wipe HD (Heavy Duty) -7.5mm PVC Floor Mat',

        images: [
          duroProduct36,
          duroProduct37,
          duroProduct38,
          duroProduct39,
          duroProduct40,
        ],

        productCode: 'DW-7',

        availability: 'In Stock',

        description:
          'DuroWipe is made from high grade polymer & it comes with an unique “Twin Blade Technology”, which has the ability to wipe out water/moisture & suck out dust from the footwear/feet in one single wipe. It’s wavy and an undulated combination of aesthetics, strength & durability. Application Areas Entrances – Lobbies, Passages, Corridors, Pathways Indoors/Outdoors – Airports, Malls, Corporate Corridors, Restaurants, Theaters, Clubs, Health Spas, Temples & Gurudwaras Households – Swimming Pools, Bathrooms, Shower Cubicles, Trains & Luxury Coaches',

        price: '₹ 115/sqft  Piece',

        specifications: [
          {
  label: 'Mat Type',
  value: 'Entrance Mat',
},
{
  label: 'Construction',
  value: 'Flexible PVC',
},
{
  label: 'Thickness',
  value: '6–8 mm',
},
{
  label: 'Roll Width',
  value: '4 ft',
},
{
  label: 'Surface Finish',
  value: 'Loop',
},
{
  label: 'Usage Area',
  value: 'Shopping Malls, Office, Kitchen, Workshop',
},
{
  label: 'Features',
  value: 'Easy Clean, Insulating, Anti Skid, Waterproof',
},
{
  label: 'Shape',
  value: 'Roll',
},
{
  label: 'Pattern',
  value: 'Zig-Zag',
},
{
  label: 'Brand',
  value: 'DURO',
},

        ],
      },


       {
        name: 'Duro Wipe Premium - 5.5mm PVC Floor Mat',

        images: [
          duroProduct41,
          duroProduct42,
          duroProduct43,
          duroProduct44,
          duroProduct45,
        ],

        productCode: 'DW-5',

        availability: 'In Stock',

        description:
          'DuroWipe is made from high grade polymer & it comes with an unique “Twin Blade Technology”, which has the ability to wipe out water/moisture & suck out dust from the footwear/feet in one single wipe. It’s wavy and an undulated combination of aesthetics, strength & durability. Application Areas Entrances – Lobbies, Passages, Corridors, Pathways Indoors/Outdoors – Airports, Malls, Corporate Corridors, Restaurants, Theaters, Clubs, Health Spas, Temples & Gurudwaras Households – Swimming Pools, Bathrooms, Shower Cubicles, Trains & Luxury Coaches',

        price: '₹ 75/sqft  Piece',

        specifications: [
          {
  label: 'Mat Type',
  value: 'Entrance Mat',
},
{
  label: 'Construction',
  value: 'Flexible PVC with Non-Slip Rubber Base',
},
{
  label: 'Thickness',
  value: '4–6 mm',
},
{
  label: 'Roll Width',
  value: '4 ft',
},
{
  label: 'Surface Finish',
  value: 'Loop',
},
{
  label: 'Usage Area',
  value: 'Office, Industrial, Bathroom, Malls, Workshop',
},
{
  label: 'Features',
  value: 'Waterproof, Anti Skid, Easy Clean, Insulating',
},
{
  label: 'Shape',
  value: 'Roll',
},
{
  label: 'Pattern',
  value: 'Zig-Zag',
},
          
        ],
      },



       {
        name: 'Duro Wipe UHD (Ultra Heavy Duty) -13mm PVC Floor Mat',

        images: [
          duroProduct46,
          duroProduct47,
          duroProduct48,
          duroProduct49,
          duroProduct50,
        ],

        productCode: 'DW-13',

        availability: 'In Stock',

        description:
          'DuroWipe is made from high grade polymer & it comes with an unique “Twin Blade Technology”, which has the ability to wipe out water/moisture & suck out dust from the footwear/feet in one single wipe. It’s wavy and an undulated combination of aesthetics, strength & durability. Application Areas Entrances – Lobbies, Passages, Corridors, Pathways Indoors/Outdoors – Airports, Malls, Corporate Corridors, Restaurants, Theaters, Clubs, Health Spas, Temples & Gurudwaras Households – Swimming Pools, Bathrooms, Shower Cubicles, Trains & Luxury Coaches',

        price: '₹ 255/sqft  Piece',

        specifications: [
          {
  label: 'Mat Type',
  value: 'Entrance Mat',
},
{
  label: 'Construction',
  value: 'Flexible PVC',
},
{
  label: 'Thickness',
  value: '10–15 mm',
},
{
  label: 'Roll Width',
  value: '4 ft',
},
{
  label: 'Surface Finish',
  value: 'Zig-Zag',
},
{
  label: 'Usage Area',
  value: 'Shopping Mall, Workshop, Bathroom, Office',
},
{
  label: 'Features',
  value: 'Waterproof, Easy Clean, Anti Skid, Insulating',
},
{
  label: 'Shape',
  value: 'Roll',
},
{
  label: 'Pattern',
  value: 'Zig-Zag',
},
{
  label: 'Brand',
  value: 'DURO',
},
          
        ],
      },



       {
        name: 'Duro Wipe+ (Plus) - 6.5mm PVC Floor Mat',

        images: [
          duroProduct51,
          duroProduct52,
          duroProduct53,
          duroProduct54,
          duroProduct55,
        ],

        productCode: 'DW-6',

        availability: 'In Stock',

        description:
          'DuroWipe is made from high grade polymer & it comes with an unique “Twin Blade Technology”, which has the ability to wipe out water/moisture & suck out dust from the footwear/feet in one single wipe. It’s wavy and an undulated combination of aesthetics, strength & durability. Application Areas Entrances – Lobbies, Passages, Corridors, Pathways Indoors/Outdoors – Airports, Malls, Corporate Corridors, Restaurants, Theaters, Clubs, Health Spas, Temples & Gurudwaras Households – Swimming Pools, Bathrooms, Shower Cubicles, Trains & Luxury Coaches',

        price: '₹ 95/sqft  Piece',

        specifications: [
          {
  label: 'Mat Type',
  value: 'Entrance Mat',
},
{
  label: 'Construction',
  value: 'Flexible PVC',
},
{
  label: 'Thickness',
  value: '6–8 mm',
},
{
  label: 'Roll Width',
  value: '4 ft',
},
{
  label: 'Surface Finish',
  value: 'Loop',
},
{
  label: 'Usage Area',
  value: 'Shopping Malls, Industrial, Office, Bathroom',
},
{
  label: 'Features',
  value: 'Easy Clean, Insulating, Waterproof',
},
{
  label: 'Shape',
  value: 'Roll',
},
{
  label: 'Pattern',
  value: 'Zig-Zag',
},
          
        ],
      },

    ],

     'DURO TURF LITE': [

      {
        name: 'Duro Turf Lite - 12mm Synthetic Floor Mat',

        images: [
          duroProduct21,
          duroProduct22,
          duroProduct23,
          duroProduct24,
          duroProduct25,
        ],

        productCode: 'DTL-12',

        availability: 'In Stock',

        description:
          'DuroTurf are made from special polymer tufts that scrape stubborn dirt and muck off your footwear thus keeping harmful germs outside your home. Duro Turf caters to a varied set of industries including numerous Corporates, Public Sector Units, Health Sector, Private Enterprises and the Hospitality Industry across the Country. These turfs are available in different colours and sizes.',

        price: '₹ 65/sqft Piece',

        specifications: [
         {
  label: 'Pile Height',
  value: '12',
},
{
  label: 'Application',
  value: 'Dirt Removal, Balcony',
},
{
  label: 'Roll Width',
  value: '1 m',
},
{
  label: 'Usage Level',
  value: 'Medium Traffic',
},
{
  label: 'Top Layer',
  value: 'Synthetic Resin',
},
{
  label: 'Bottom Layer',
  value: 'Non-woven cloth, Reinforced with Nylon net Backing',
},
{
  label: 'Roll Size',
  value: '1×10 Mtrs, 1.2×15 Mtrs, 0.6×15 Mtrs',
},
{
  label: 'Color',
  value: 'Green, Red, Blue, Grey & Marron.',
},
        ],
      },

       {
        name: 'Duro Turf Lite Plus -16mm Synthetic Floor Mat',

        images: [
          duroProduct26,
          duroProduct27,
          duroProduct28,
          duroProduct29,
          duroProduct30,
        ],

        productCode: 'DTL-16',

        availability: 'In Stock',

        description:
          'DuroTurf are made from special polymer tufts that scrape stubborn dirt and muck off your footwear thus keeping harmful germs outside your home. Duro Turf caters to a varied set of industries including numerous Corporates, Public Sector Units, Health Sector, Private Enterprises and the Hospitality Industry across the Country. These turfs are available in different colours and sizes.',

        price: '₹ 60/ sqft Piece',

        specifications: [
         {
  label: 'Pile Height',
  value: '16 mm',
},
{
  label: 'Application',
  value: 'Landscape, Balcony, Entrances, Dirt Removal',
},
{
  label: 'Roll Width',
  value: '1 m',
},
{
  label: 'Usage Level',
  value: 'Heavy Traffic',
},
{
  label: 'Top Layer',
  value: 'Synthetic Resin',
},
{
  label: 'Bottom Layer',
  value: 'Non-woven cloth, Reinforced with Nylon net Backing',
},
{
  label: 'Roll Size',
  value: '1×10 Mtrs, 1.2×15 Mtrs, 0.6×15 Mtrs',
},
{
  label: 'Brand',
  value: 'DURO',
},
        ],
      },



       {
        name: 'Duro Turf Premium - 16mm Synthetic Floor Mat',

        images: [
          duroProduct31,
          duroProduct32,
          duroProduct33,
          duroProduct34,
          duroProduct35,
        ],

        productCode: 'DTL-16',

        availability: 'In Stock',

        description:
          'DuroTurf are made from special polymer tufts that scrape stubborn dirt and muck off your footwear thus keeping harmful germs outside your home. Duro Turf caters to a varied set of industries including numerous Corporates, Public Sector Units, Health Sector, Private Enterprises and the Hospitality Industry across the Country. These turfs are available in different colours and sizes.',

        price: '₹ 110/sqft Piece',

        specifications: [
         {
  label: 'Pile Height',
  value: '15 mm',
},
{
  label: 'Application',
  value: 'Balcony, Landscape, Dirt Removal',
},
{
  label: 'Roll Width',
  value: '1 m',
},
{
  label: 'Dtex',
  value: '12000–14000',
},
{
  label: 'Usage Level',
  value: 'Heavy Traffic',
},
{
  label: 'Top Layer',
  value: 'Synthetic Resin',
},
{
  label: 'Bottom Layer',
  value: 'Composite Sheet backing + Reinforced Nylon net',
},
{
  label: 'Size',
  value: '1 × 5 Mtrs, 1.2 × 5 Mtrs, 0.6 × 5 Mtrs',
},
{
  label: 'Color',
  value: 'Green, Red, Blue, Grey & Marron.',
},
        ],
      },

    ],


  }


  // Create URL-friendly product slug
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }


  // Get product from URL
  const productSlug = searchParams.get('product')

  let urlProduct = null
  let urlCategory = null

  Object.entries(products).forEach(([category, categoryProducts]) => {

    const product = categoryProducts.find(
      item => createSlug(item.name) === productSlug
    )

    if (product) {
      urlProduct = product
      urlCategory = category
    }

  })

  const currentProduct = selectedProduct || urlProduct

  return (

    <div className="duro-page">


      {/* =========================
          DURO MATS BANNER
      ========================= */}

      <section className="duro-banner">
  <picture>
    <source
      media="(max-width: 768px)"
      srcSet={duroBannerMobile}
    />

    <img
      src={duroBanner}
      alt="Duro Mats"
    />
  </picture>
</section>



      {/* =========================
          DURO MATS PRODUCTS
      ========================= */}

      <section className="duro-categories">


        <h1 className="duro-products-title">
          Duro Mats Products
        </h1>



        {/* =========================
            CATEGORY BUTTONS
        ========================= */}

        <div className="duro-category-tabs">

          {categories.map((category) => (

            <button
              key={category}

              className={`duro-category-tab ${
                selectedCategory === category
                  ? 'active'
                  : ''
              }`}

              onClick={() => {

                setSelectedCategory(category)

                setSelectedProduct(null)

                setSearchParams({})

              }}

            >
              {category}

            </button>

          ))}

        </div>



        {/* =========================
            PRODUCT LIST
        ========================= */}

        {!currentProduct && (

          <>

            <h2 className="duro-category-title">
              {selectedCategory}
            </h2>


            <div className="duro-product-grid">

              {products[selectedCategory]?.map((product) => (

                <div
                  className="duro-product-card"

                  key={product.name}

                  onClick={() => {

                    setSearchParams({
                      product: createSlug(product.name)
                    })

                    setSelectedImage(0)

                  }}

                >


                  {/* PRODUCT IMAGE */}

                  <div className="duro-product-image">

                    <img
                      src={product.images[0]}
                      alt={product.name}
                    />

                  </div>



                  {/* PRODUCT INFORMATION */}

                  <div className="duro-product-info">

                    <h3>
                      {product.name}
                    </h3>


                    <p className="duro-product-price">
                      {product.price}
                    </p>

                     <p className="duro-product-description">
  {product.description}
</p>

<span className="duro-read-more">
  Read More →
</span>

                  </div>


                </div>

              ))}

            </div>

          </>

        )}



        {/* =========================
            PRODUCT DETAIL
        ========================= */}

        {currentProduct && (

          <div className="duro-product-detail">


            {/* BACK BUTTON */}

            <button
              className="duro-back-button"

              onClick={() => {
                if (urlCategory) {
                  setSelectedCategory(urlCategory)
                }

                setSearchParams({})
                setSelectedProduct(null)
              }}

            >
              ← Back to Products
            </button>



            <div className="duro-detail-container">


              {/* =========================
                  LEFT SIDE
              ========================= */}

              <div className="duro-detail-left">


                {/* MAIN IMAGE */}

                <div className="duro-detail-image">

                  <img
                    src={
                      currentProduct.images[
                        selectedImage
                      ]
                    }

                    alt={currentProduct.name}
                  />

                </div>



                {/* IMAGE THUMBNAILS */}

                <div className="duro-image-thumbnails">

                  {currentProduct.images.map(
                    (image, index) => (

                      <button
                        key={index}

                        className={`duro-thumbnail ${
                          selectedImage === index
                            ? 'active'
                            : ''
                        }`}

                        onClick={() =>
                          setSelectedImage(index)
                        }

                      >

                        <img
                          src={image}
                          alt={`${currentProduct.name} ${
                            index + 1
                          }`}
                        />

                      </button>

                    )
                  )}

                </div>


              </div>



              {/* =========================
                  RIGHT SIDE
              ========================= */}

              <div className="duro-detail-info">


                {/* PRODUCT NAME */}

                <h2>
                  {currentProduct.name}
                </h2>



                {/* PRODUCT CODE */}

                <p className="duro-product-code">

                  Product Code:{' '}

                  {currentProduct.productCode}

                </p>



                {/* AVAILABILITY */}

                <div className="duro-availability">

                  ● {currentProduct.availability}

                </div>



 {/* PRICE */}

                <div className="duro-detail-price">

                  {currentProduct.price}

                </div>

                
{/* BUTTONS */}

                <div className="duro-detail-buttons">


                  <button className="duro-quote-button">

                    Request a Quote

                  </button>



                  <button className="duro-enquiry-button">

                    Add to Enquiry

                  </button>


                </div>



            
                {/* =========================
                    TECHNICAL SPECIFICATIONS
                ========================= */}

                <div className="duro-specifications">


                  <h3>

                    ⚙ Technical Specifications

                  </h3>



                  {currentProduct.specifications?.map(
                    (spec) => (

                      <div
                        className="duro-spec-row"

                        key={spec.label}
                      >

                        <span>
                          {spec.label}
                        </span>


                        <span>
                          {spec.value}
                        </span>

                      </div>

                    )
                  )}


                </div>

                {/* DESCRIPTION */}

                <p className="duro-detail-description">

                  {currentProduct.description}

                </p>



              </div>


            </div>


          </div>

        )}


      </section>


    </div>

  )

}


export default DuroMats