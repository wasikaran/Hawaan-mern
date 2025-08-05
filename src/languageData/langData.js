import contact from "../pages/contact/contact";

const translations = {
    english: {
        header: {
            home: 'HOME',
            blog: 'BLOGS',
            navlinks: ["CATEGORIES", "MEN'S", "WOMEN'S", "KID's", "BLOG"],
            categories: ["Jewellery", "Perfumes", "Men's", "Women's", "Electronics"],
            jewllery: ["Earrings", "Couplerings", "Necklace", "bracelete"],
            perfumes: ["Floral", "Oriental", "Woody", "Fougere"],
            men: ["Sunglasses", "Watches", "wallete", "Shoes"],
            women: ["Lipstick", "Eyeliner", "Primer", "Mascara"],
            electronics: ["Smart watch", "Smart TV", "Mouse", "Microphone"],
            menCollection: ["Formal", "Casual", "Tshirts", "jackets", " Shorts"],
            womenCollection: ["Formal", "Kurtas & Suit", "Saree", "Lahenga & Cholis", "Dupatta & Shawls"],
            kidsCollection: ["Formal", "Casual", "Shorts", "Trousers", "Tshirts"],
            icon: ["Log in", "Orders", "Cart"]
        },
        footer: {
            heading: "PRODUCT DIRECTORY",
            CatHeading: ["JEWLLERY", "PERFUMES", "MEN'S COLLECTION", "WOMEN'S COLLECTION", "kID'S COLLECTION", "ELECTRSONIC"],
            menCollection: ["Formal", "Casual", "Tshirts", "jackets", " Shorts", "Sunglasses", "Watches", "wallete", "Shoes"],
            womenCollection: ["Formal", "Kurtas & Suit", "Saree", "Lahenga & Cholis", "Dupatta & Shawls", "Lipstick", "Eyeliner", "Primer", "Mascara"],
            kidsCollection: ["Formal", "Casual", "Shorts", "Trousers", "Tshirts"],
            electronics: ["Smart watch", "Smart TV", "Mouse", "Microphone"],
            jewllery: ["Earrings", "Couplerings", "Necklace", "bracelete"],
            perfumes: ["Floral", "Oriental", "Woody", "Fougere"],
            subHeadings: ["Main Categories", "Popular Collections", "Company Info", "Customer Service", "Contact", "Info"],
            MainCategories: ["Home", "Jewellery", "Perfumes", "Men's Collection", "Women's Collection", "kid's Collection", "Electronic"],
            PopularCollections: ["Trending Earrings", "Premium Perfumes", "Men's Formal Wear", "Designing saree", "Smart Watches"],
            CompanyInfo: ["About", "Blogs", "Return Policy", "privacy Policy", "Terms & Conditions"],
            CustomerService: ["Contact Us", "Help Center", "Order Support", "Size Guide", "FAQS"],
            contact: ["taiser town, surjani town, karachi", "Support@Hawaan.gmail.com", "12345678900"],
            copyRight: "All Rights Reserved 2024",


        },
        contact: "Contact",
        toggle: "Switch to Urdu"
    },
    urdu: {
    header: {
      home: 'ہوم',
      blog: 'بلاگز',
      navlinks: ["زمرے", "مردانہ", "زنانہ", "بچوں کا", "بلاگ"],
      categories: ["زیورات", "عطر", "مردانہ", "زنانہ", "الیکٹرانکس"],
      jewllery: ["بالیاں", "جوڑوں کی انگوٹھیاں", "ہار", "کنگن"],
      perfumes: ["پھولوں کی خوشبو", "مشرقی", "لکڑی کی خوشبو", "فوژیر"],
      men: ["سن گلاسز", "گھڑیاں", "بٹوے", "جوتے"],
      women: ["لِپ اسٹک", "آئی لائنر", "پرائمر", "مسکارا"],
      electronics: ["اسمارٹ واچ", "اسمارٹ ٹی وی", "ماؤس", "مائیکروفون"],
      menCollection: ["فارمل", "کژوئل", "ٹی شرٹس", "جیکٹس", "شارٹس"],
      womenCollection: ["فارمل", "کرتے اور سوٹ", "ساڑی", "لہنگا اور چولیاں", "دوپٹہ اور شال"],
      kidsCollection: ["فارمل", "کژوئل", "شارٹس", "پتلون", "ٹی شرٹس"],
      icon: ["لاگ ان", "آرڈرز", "کارٹ"]
    },
    footer: {
      heading: "پروڈکٹ ڈائریکٹری",
      CatHeading: ["زیورات", "عطر", "مردانہ کلیکشن", "زنانہ کلیکشن", "بچوں کی کلیکشن", "الیکٹرانکس"],
      menCollection: ["فارمل", "کژوئل", "ٹی شرٹس", "جیکٹس", "شارٹس", "سن گلاسز", "گھڑیاں", "بٹوے", "جوتے"],
      womenCollection: ["فارمل", "کرتے اور سوٹ", "ساڑی", "لہنگا اور چولیاں", "دوپٹہ اور شال", "لِپ اسٹک", "آئی لائنر", "پرائمر", "مسکارا"],
      kidsCollection: ["فارمل", "کژوئل", "شارٹس", "پتلون", "ٹی شرٹس"],
      electronics: ["اسمارٹ واچ", "اسمارٹ ٹی وی", "ماؤس", "مائیکروفون"],
      jewllery: ["بالیاں", "جوڑوں کی انگوٹھیاں", "ہار", "کنگن"],
      perfumes: ["پھولوں کی خوشبو", "مشرقی", "لکڑی کی خوشبو", "فوژیر"],
      subHeadings: ["اہم زمرے", "مقبول کلیکشن", "کمپنی کی معلومات", "کسٹمر سروس", "رابطہ کریں"],
      MainCategories: ["ہوم", "زیورات", "عطر", "مردانہ کلیکشن", "زنانہ کلیکشن", "بچوں کی کلیکشن", "الیکٹرانکس"],
      PopularCollections: ["ٹرینڈنگ بالیاں", "پریمیم عطر", "مردانہ فارمل پہناوے", "ڈیزائنر ساڑھی", "اسمارٹ گھڑیاں"],
      CompanyInfo: ["ہمارے بارے میں", "بلاگز", "واپسی کی پالیسی", "پرائیویسی پالیسی", "شرائط و ضوابط"],
      CustomerService: ["ہم سے رابطہ کریں", "مدد مرکز", "آرڈر سپورٹ", "سائز گائیڈ", "عمومی سوالات"],
contact: ["ٹائیسر ٹاؤن، سرجانی ٹاؤن، کراچی", "Support@Hawaan.gmail.com", "۱۲۳۴۵۶۷۸۹۰۰"],
      copyRight: "جملہ حقوق محفوظ ہیں 2024"
    },
        contact: "رابطہ کریں",
        toggle: "انگریزی پر سوئچ کریں"
    }
};




export default translations;
