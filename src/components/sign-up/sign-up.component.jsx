import React from 'react';
import FormInput from '../form-input/form-input.component';
import Rectbtn from '../rectangular-button/rectangular-button.component';
import $ from 'jquery';
import './state';
import './sign-up.styles.scss';

class signup extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            mobile:'',
            pin:'',
            state:'',
            district:'',
            address1:'',
            address2:'',
            password:'',
            confirmPassword:''
        }
    }

handleSubmit = async event=>{
    event.preventDefault();
    const {name,mobile,email,pin,state,district,address1,address2,password,confirmPassword}= this.state;

    if(password !== confirmPassword){
        alert("Password don't match");
        return;
    }

    try{

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({name:name,email:email,mobile:mobile,pin:pin,state:state,district:district,address1:address1,address2:address2,password:password}))
        };
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://covid19pr.herokuapp.com/signup'
        fetch(proxyUrl+url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.stat==="200"){
                    alert("please check your email to verify");
                    
                }
                else{
                    console.log(data);
                    alert(data.message.errmsg);
                }
            })

        // console.log(name);
        // console.log(email);
        // console.log(pin);
        // console.log(address1);
        // console.log(address2);
        // alert(state);
        // alert(mobile);
        // alert(district);


        this.setState({
            name:'',
            email:'',
            pin:'',
            mobile:'',
            state:'',
            district:'',
            address1:'',
            address2:'',
            password:'',
            confirmPassword:''
        })
    }catch(error){
        console.error(error);
    }
}


changedistrict = event=>{
    this.setState({district:event.target.value});
}

handleChange = event=>{
    const {name,value} = event.target;

    this.setState({[name]:value});
}





selct_district = event=>{

    this.setState({state:event.target.value})

    var $val=event.target.value;

    if ($val === 'SELECT STATE') {
        var options = '';
        $('#secondlist').html(options);
    }
    if ($val === 'Andhra Pradesh') {
        var andhra = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "SriPotti Sri Ramulu Nellore",
            "Vishakhapatnam", "Vizianagaram", "West Godavari", "Cudappah"];
        $(function () {
            var options = '';
            for (var i = 0; i < andhra.length; i++) {
                options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Arunachal Pradesh') {
        var ap = ["Anjaw", "Changlang", "Dibang Valley", "East Siang", "East Kameng", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Papum Pare",
            "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"];
        $(function () {
            var options = '';
            for (var i = 0; i < ap.length; i++) {
                options += '<option value="' + ap[i] + '">' + ap[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Assam') {
        var assam = ["Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dima Hasao", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat",
            "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "Tinsukia", "Udalguri"];
        $(function () {
            var options = '';
            for (var i = 0; i < assam.length; i++) {
                options += '<option value="' + assam[i] + '">' + assam[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Bihar') {
        var bihar = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur",
            "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa",
            "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];
        $(function () {
            var options = '';
            for (var i = 0; i < bihar.length; i++) {
                options += '<option value="' + bihar[i] + '">' + bihar[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Chhattisgarh') {
        var Chhattisgarh = ["Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Jashpur", "Janjgir-Champa", "Korba", "Koriya", "Kanker", "Kabirdham (formerly Kawardha)", "Mahasamund",
            "Narayanpur", "Raigarh", "Rajnandgaon", "Raipur", "Surajpur", "Surguja"];
        $(function () {
            var options = '';
            for (var i = 0; i < Chhattisgarh.length; i++) {
                options += '<option value="' + Chhattisgarh[i] + '">' + Chhattisgarh[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Dadra and Nagar Haveli') {
        var dadra = ["Amal", "Silvassa"];
        $(function () {
            var options = '';
            for (var i = 0; i < dadra.length; i++) {
                options += '<option value="' + dadra[i] + '">' + dadra[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Daman and Diu') {
        var daman = ["Daman", "Diu"];
        $(function () {
            var options = '';
            for (var i = 0; i < daman.length; i++) {
                options += '<option value="' + daman[i] + '">' + daman[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Delhi') {
        var delhi = ["Delhi", "New Delhi", "North Delhi", "Noida", "Patparganj", "Sonabarsa", "Tughlakabad"];
        $(function () {
            var options = '';
            for (var i = 0; i < delhi.length; i++) {
                options += '<option value="' + delhi[i] + '">' + delhi[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Goa') {
        var goa = ["Chapora", "Dabolim", "Madgaon", "Marmugao (Marmagao)", "Panaji Port", "Panjim", "Pellet Plant Jetty/Shiroda", "Talpona", "Vasco da Gama"];
        $(function () {
            var options = '';
            for (var i = 0; i < goa.length; i++) {
                options += '<option value="' + goa[i] + '">' + goa[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Gujarat') {
        var gujarat = ["Ahmedabad", "Amreli district", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Dahod", "Dang", "Gandhinagar", "Jamnagar", "Junagadh",
            "Kutch", "Kheda", "Mehsana", "Narmada", "Navsari", "Patan", "Panchmahal", "Porbandar", "Rajkot", "Sabarkantha", "Surendranagar", "Surat", "Tapi", "Vadodara", "Valsad"];
        $(function () {
            var options = '';
            for (var i = 0; i < gujarat.length; i++) {
                options += '<option value="' + gujarat[i] + '">' + gujarat[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Haryana') {
        var haryana = ["Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hissar", "Jhajjar", "Jind", "Karnal", "Kaithal",
            "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamuna Nagar"];
        $(function () {
            var options = '';
            for (var i = 0; i < haryana.length; i++) {
                options += '<option value="' + haryana[i] + '">' + haryana[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val === 'Himachal Pradesh') {
        var himachal = ["Baddi", "Baitalpur", "Chamba", "Dharamsala", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Simla", "Sirmaur", "Solan", "Una"];
        $(function () {
            var options = '';
            for (var i = 0; i < himachal.length; i++) {
                options += '<option value="' + himachal[i] + '">' + himachal[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Jammu and Kashmir') {
        var jammu = ["Jammu", "Leh", "Rajouri", "Srinagar"];
        $(function () {
            var options = '';
            for (var i = 0; i < jammu.length; i++) {
                options += '<option value="' + jammu[i] + '">' + jammu[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Jharkhand') {
        var jharkhand = ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu",
            "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"];
        $(function () {
            var options = '';
            for (var i = 0; i < jharkhand.length; i++) {
                options += '<option value="' + jharkhand[i] + '">' + jharkhand[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Karnataka') {
        var karnataka = ["Bagalkot", "Bangalore", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Bijapur", "Chamarajnagar", "Chikkamagaluru", "Chikkaballapur",
            "Chitradurga", "Davanagere", "Dharwad", "Dakshina Kannada", "Gadag", "Gulbarga", "Hassan", "Haveri district", "Kodagu",
            "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Ramanagara", "Yadgir"];
        $(function () {
            var options = '';
            for (var i = 0; i < karnataka.length; i++) {
                options += '<option value="' + karnataka[i] + '">' + karnataka[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Kerala') {
        var kerala = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram", "Wayanad"];
        $(function () {
            var options = '';
            for (var i = 0; i < kerala.length; i++) {
                options += '<option value="' + kerala[i] + '">' + kerala[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Madhya Pradesh') {
        var mp = ["Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhilai", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Dewas", "Dhar", "Guna", "Gwalior", "Hoshangabad",
            "Indore", "Itarsi", "Jabalpur", "Khajuraho", "Khandwa", "Khargone", "Malanpur", "Malanpuri (Gwalior)", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Pithampur", "Raipur", "Raisen", "Ratlam",
            "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Singrauli", "Ujjain"];
        $(function () {
            var options = '';
            for (var i = 0; i < mp.length; i++) {
                options += '<option value="' + mp[i] + '">' + mp[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Maharashtra') {
        var maharashtra = ["Ahmednagar", "Akola", "Alibag", "Amaravati", "Arnala", "Aurangabad", "Aurangabad", "Bandra", "Bassain", "Belapur", "Bhiwandi", "Bhusaval", "Borliai-Mandla", "Chandrapur", "Dahanu", "Daulatabad", "Dighi (Pune)", "Dombivali", "Goa", "Jaitapur", "Jalgaon",
            "Jawaharlal Nehru (Nhava Sheva)", "Kalyan", "Karanja", "Kelwa", "Khopoli", "Kolhapur", "Lonavale", "Malegaon", "Malwan", "Manori",
            "Mira Bhayandar", "Miraj", "Mumbai (ex Bombay)", "Murad", "Nagapur", "Nagpur", "Nalasopara", "Nanded", "Nandgaon", "Nasik", "Navi Mumbai", "Nhave", "Osmanabad", "Palghar",
            "Panvel", "Pimpri", "Pune", "Ratnagiri", "Sholapur", "Shrirampur", "Shriwardhan", "Tarapur", "Thana", "Thane", "Trombay", "Varsova", "Vengurla", "Virar", "Wada"];
        $(function () {
            var options = '';
            for (var i = 0; i < maharashtra.length; i++) {
                options += '<option value="' + maharashtra[i] + '">' + maharashtra[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Manipur') {
        var manipur = ["Bishnupur", "Churachandpur", "Chandel", "Imphal East", "Senapati", "Tamenglong", "Thoubal", "Ukhrul", "Imphal West"];
        $(function () {
            var options = '';
            for (var i = 0; i < manipur.length; i++) {
                options += '<option value="' + manipur[i] + '">' + manipur[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Meghalaya') {
        var meghalaya = ["Baghamara", "Balet", "Barsora", "Bolanganj", "Dalu", "Dawki", "Ghasuapara", "Mahendraganj", "Moreh", "Ryngku", "Shella Bazar", "Shillong"];
        $(function () {
            var options = '';
            for (var i = 0; i < meghalaya.length; i++) {
                options += '<option value="' + meghalaya[i] + '">' + meghalaya[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Mizoram') {
        var mizoram = ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"];
        $(function () {
            var options = '';
            for (var i = 0; i < mizoram.length; i++) {
                options += '<option value="' + mizoram[i] + '">' + mizoram[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Nagaland') {
        var nagaland = ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"];
        $(function () {
            var options = '';
            for (var i = 0; i < nagaland.length; i++) {
                options += '<option value="' + nagaland[i] + '">' + nagaland[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Orissa') {
        var orissa = ["Bahabal Pur", "Bhubaneswar", "Chandbali", "Gopalpur", "Jeypore", "Paradip Garh", "Puri", "Rourkela"];
        $(function () {
            var options = '';
            for (var i = 0; i < orissa.length; i++) {
                options += '<option value="' + orissa[i] + '">' + orissa[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Puducherry') {
        var puducherry = ["Karaikal", "Mahe", "Pondicherry", "Yanam"];
        $(function () {
            var options = '';
            for (var i = 0; i < puducherry.length; i++) {
                options += '<option value="' + puducherry[i] + '">' + puducherry[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Punjab') {
        var punjab = ["Amritsar", "Barnala", "Bathinda", "Firozpur", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot",
            "Patiala", "Rupnagar", "Ajitgarh (Mohali)", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"];
        $(function () {
            var options = '';
            for (var i = 0; i < punjab.length; i++) {
                options += '<option value="' + punjab[i] + '">' + punjab[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Rajasthan') {
        var rajasthan = ["Ajmer", "Banswara", "Barmer", "Barmer Rail Station", "Basni", "Beawar", "Bharatpur", "Bhilwara", "Bhiwadi", "Bikaner", "Bongaigaon", "Boranada, Jodhpur", "Chittaurgarh", "Fazilka", "Ganganagar", "Jaipur", "Jaipur-Kanakpura",
            "Jaipur-Sitapura", "Jaisalmer", "Jodhpur", "Jodhpur-Bhagat Ki Kothi", "Jodhpur-Thar", "Kardhan", "Kota", "Munabao Rail Station", "Nagaur", "Rajsamand", "Sawaimadhopur", "Shahdol", "Shimoga", "Tonk", "Udaipur"];
        $(function () {
            var options = '';
            for (var i = 0; i < rajasthan.length; i++) {
                options += '<option value="' + rajasthan[i] + '">' + rajasthan[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val === 'Sikkim') {
        var sikkim = ["Chamurci", "Gangtok"];
        $(function () {
            var options = '';
            for (var i = 0; i < sikkim.length; i++) {
                options += '<option value="' + sikkim[i] + '">' + sikkim[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val === 'Tamil Nadu') {
        var tn = ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mandapam", "Nagapattinam", "Nilgiris", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Thiruvallur", "Tirupur",
            "Tiruchirapalli", "Theni", "Tirunelveli", "Thanjavur", "Thoothukudi", "Tiruvallur", "Tiruvannamalai", "Vellore", "Villupuram", "Viruthunagar"];
        $(function () {
            var options = '';
            for (var i = 0; i < tn.length; i++) {
                options += '<option value="' + tn[i] + '">' + tn[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val === 'Telangana') {
        var telangana = ["Adilabad", "Hyderabad", "Karimnagar", "Mahbubnagar", "Medak", "Nalgonda", "Nizamabad", "Ranga Reddy", "Warangal"];
        $(function () {
            var options = '';
            for (var i = 0; i < telangana.length; i++) {
                options += '<option value="' + telangana[i] + '">' + telangana[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val === 'Tripura') {
        var tripura = ["Agartala", "Dhalaighat", "Kailashahar", "Kamalpur", "Kanchanpur", "Kel Sahar Subdivision", "Khowai", "Khowaighat", "Mahurighat", "Old Raghna Bazar", "Sabroom", "Srimantapur"];
        $(function () {
            var options = '';
            for (var i = 0; i < tripura.length; i++) {
                options += '<option value="' + tripura[i] + '">' + tripura[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val === 'Uttar Pradesh') {
        var up = ["Agra", "Allahabad", "Auraiya", "Banbasa", "Bareilly", "Berhni", "Bhadohi", "Dadri", "Dharchula", "Gandhar", "Gauriphanta", "Ghaziabad", "Gorakhpur", "Gunji",
            "Jarwa", "Jhulaghat (Pithoragarh)", "Kanpur", "Katarniyaghat", "Khunwa", "Loni", "Lucknow", "Meerut", "Moradabad", "Muzaffarnagar", "Nepalgunj Road", "Pakwara (Moradabad)",
            "Pantnagar", "Saharanpur", "Sonauli", "Surajpur", "Tikonia", "Varanasi"];
        $(function () {
            var options = '';
            for (var i = 0; i < up.length; i++) {
                options += '<option value="' + up[i] + '">' + up[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val === 'Uttarakhand') {
        var uttarakhand = ["Almora", "Badrinath", "Bangla", "Barkot", "Bazpur", "Chamoli", "Chopra", "Dehra Dun", "Dwarahat", "Garhwal", "Haldwani", "Hardwar", "Haridwar", "Jamal", "Jwalapur", "Kalsi", "Kashipur", "Mall",
            "Mussoorie", "Nahar", "Naini", "Pantnagar", "Pauri", "Pithoragarh", "Rameshwar", "Rishikesh", "Rohni", "Roorkee", "Sama", "Saur"];
        $(function () {
            var options = '';
            for (var i = 0; i < uttarakhand.length; i++) {
                options += '<option value="' + uttarakhand[i] + '">' + uttarakhand[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val === 'West Bengal') {
        var wb = ["Alipurduar", "Bankura", "Bardhaman", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah",
            "Jalpaiguri", "Kolkata", "Maldah", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"];
        $(function () {
            var options = '';
            for (var i = 0; i < wb.length; i++) {
                options += '<option value="' + wb[i] + '">' + wb[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

}






    render(){
        const {name,email,pin,mobile,address1,address2,password,confirmPassword}= this.state;
        return(
            <div className='sign-up'>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    
                <h2 className="title">I do not have an account</h2>
                <span>Signup with your email and password</span>
                <FormInput 
                type='text'
                name ='name'
                value={name}
                onChange={this.handleChange}
                label='Name'
                required>
                </FormInput>

                <FormInput 
                type='email'
                name ='email'
                value={email}
                onChange={this.handleChange}
                label='EMAIL'
                required>
                </FormInput>

                
                <FormInput 
                type='number'
                name ='mobile'
                value={mobile}
                onChange={this.handleChange}
                label='Mobile Number'
                required>
                </FormInput>

                <FormInput
                type='number'
                name ='pin'
                value={pin}
                onChange={this.handleChange}
                maxLength="6"
                minLength="6"
                label='pincode'
                required>
                </FormInput>


                <div className="input-group">
                  Select State: <select id="listBox"  onChange={this.selct_district}></select>
                  Select District: <select id='secondlist'  onChange={this.changedistrict}></select>
               </div>

               <FormInput 
                type='text'
                name ='address1'
                value={address1}
                onChange={this.handleChange}
                label='Address 1'
                required>
                </FormInput>

                <FormInput 
                type='text'
                name ='address2'
                value={address2}
                onChange={this.handleChange}
                label='Address 2'
                required>
                </FormInput>

                <FormInput 
                type='password'
                name ='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required>
                </FormInput>

                <FormInput 
                type='password'
                name ='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='confirm Password'
                required>
                </FormInput>

                <Rectbtn info={'Signup'}></Rectbtn>
                
                </form>
            </div>
            
        )
    }
}

export default signup;