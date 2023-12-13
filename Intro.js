// Vue js is a javascript framework for building application/

// How Vue Helps ?
// 1.) Fast Application
// 2.) Dynamic Application 
// 3.) Speed of development 
// 4.) Developer Tools 
// 5.) Helps with scaling 

// ! Vue Js
// Virtual dom framework 
// Lightweight(10k gzip)
// Progressive 
// Flexible 
// Incrementally adoptable 

// History of Vue.js


// Installation
// CDN - @next is important becuase v3 is not in main repo of vue js . It is in other repo
{/* <script src="https://unpkg.com/vue@next"></script> */}



// v-on - Event Handling directives we can replace v-on with @ like @click for v-on:click

// Here click , enter are event modifier 
// @click.right - right click 
// @click.prevent - prevent = event.preventDefault
// @click.prevent.stop 

// Components
// Till now we just worked on single html file .
// Now we will just break our application into several parts to make larger applications 





//! What is Vue js
// 1.) Javascript Framework for building web app 
// 2.) Vue js is progressive Framework
// 3.) Vue js 3 is the current version
// 4.) We make single page application in Vue js 

//! History of Vue js
// Initial Release Feb 2014 
// The current version is 3.0.5 (Major , Minor , Bug)
// Vue is created by Evan You 
// Evan you were working for google


//! Main Topic of series 
// Intro 
// setup 
// How to start 
// Components 
// Conditions and Loops 
// Forms  
// Api 
// Life cycle 
// Routing  
// State Management 
// Small Project 
// Build 
// 3rd Party Library 
// Interview Questions 

// ! • How to use Vue js without Node and
// • Make Index.html file
// • Make app.js file
// • Add Vue js cdn Link
// A • Write A code with vue js


// ! Why we include app js script file in the last of html file 
// because we want to mount our vuejs application in component with id app  but till then app is not created if we put script in head

// ! Can we use Vue js with cdn
// Yes 

// ! Is is write way to use cdn instead of npm
// No becuase after building it does not comparess that much

// ! How to Install Vue js
// • Install Node and NPM
// • Install Vue Cli
// • Create Application
// • Run Application
// • Check Output

//! How to install using CLI
// Vue Cli and vue is different

// ! Understand Package.json
// • Understand Package.json
// • Understand sre folder
// • Take A look on Component
// • Apply first change

// ! Why we use Babel
// Babel's job is to transform modern JavaScript code into older JavaScript code to ensure it's broadly compatible across browsers

// ! Code Flow
// • Understand Code Flow
// • Understand First Component
// • Remove Extra Code
// • Checkout Changes

// ! Extenshion
// Search Vue and Vue editor 

// ! Top Level Component
// app.vue is top level component which we mount in html 

// ! Component 
// Every Component has 
// 1.) Template 
// 2.) Script 
// 3.) Style 


// ! How to make first component
// • Make File for Component
// 1.) Define Template and Script
// 2.) Import and Use Componen
// 3.) Add Style
// 4.) Interview Question

// Component is kind of code for a specific part which can be reused again 

// ! Scoped 
// We can bind the css to a particular componenet using scoped keyword


// ! What is Interpolation in Vue js
// Helps to use variable , function in template from script
{/* <h1>Home Component {{"Hello".length}}</h1> */}

// ! What we can do with Interpolation
// We can pass data of any kind from script but we have to put that data in data section 


// ! Can we change the value of data in interpulation ?
// We can do this in vue but can not do angular and angular also support this feature

// !Define methods
// !Use methods
// !this and use data property in functions
// !Interview Question
// ? Why we use methods to define method why we can not use methods which we define in data 
// Because methods which we define in data we can not use variable parallel to that method 

{/* <template>
    <h1> {{ "Hello".length }} Home Component</h1>
    <h1></h1>
    <h1>Email {{ email }}</h1>
    <h1>Phone {{ phone }}</h1>
    <h1>Name {{ getName("Sidhu") }}</h1>
    <h1>{{Name()}}</h1>
</template>
<script>
export default{
    name:'HomePage',
    data()
    {
        return {
            email:'dev.chawla2608@gmail.com',
            mobile:9999,
            getName:function(a)
            {
                return a;
            }
        }
    },
    methods:{
        Name()
        {
            return "Anil Sidhu"
        }
        ,getAge(){
            return{
                Name:'Anil',
                Age:22,
            }
        }
    }
}
</script>

<!-- In Simple words we can do any thing in interpulation But if we want to use things , variables , methods from script tag then we have to set data in export default --> */}

// !Events 
// • How to use Click Event.
// • How to call function on click
// • How to pass paramas with event
// • Double Click and Mouse Move event
// • Interview Question

// ! Vue js two-way binding
// • What is Two-way binding
// ? Bind properties model and view 
// ? Model - javascript | View - Screen
// • Issue without two way binding
// • How to apply two-way binding
// • Interview Question

//! • Make 2 Input fields.
// • Make a function for getting value
// • Define Data Property
// • Apply two-way binding
// • Interview Question

// ! • Make Checkbox with Label
// • Make Radio Button with Label
// • Define Data Property
// • Apply two-way binding

// ! • Write Html code for show and hide
// • Apply if and else condition
// • If and else condition with a button click
// • Interview Question

// ! • Define Array in Data Property
// • Apply Loop on it
// • Define Array of Object in Data Property
// • Apply Loop on it.
// • Interview Question

// ! 1. Make Child Component
// 2. Import and Use Child Component
// 3. Pass Static Data
// 4. Pass Property, Object, and Function to
// Child Component
// 5. Interview Question

// ! 1. Make Child Component
// 2. Import and Use Child Component
// 3. Apply For Loop on Array
// 4. Pass Property to Child Component
// 5. Interview Question

// ! 1. Why we need HTML binding
// 2. How to apply HTML tag binding
// 3. How to apply 2 HTML tag binding
// 4. Interview Question

// !1. What is class binding
// class banding - Sometime we have to add dynamic classes as well 
// 2. Add simple dynamic class
// 3. Change class on Button click
// 4. Dynamic class with function
// 5. Interview Question

// ! 1. What are props.
// If we want to send data from one component to other know as props . It is not necessary that those components will be parent child
// 2. How to pass data with props
// 3. What we can pass with props
// 4. Interview Question
// 5. Can we send data from child to parent 

// ! 1. Make Child Component
// 2. Pass Data and function as props
// 3. Share child component with parent
// 4. Interview Question

// ! 1. What is Ref
// 2. Make input field
// 3. Apply Ref
// 4. Operations with ref
// 5. Interview Question
// value , style , error can be done using ref

// ! 1. Define some input field.
// 2. Apply 2-way binding.
// 3. Print and submit value.
// 4. Interview Question. z

// ! 1. Continue Last Video
// 2. Add
// 1. Radio button
// 2. Checkbox
// 3. Select box
// 3. Define Property and B
// 4. Print and submit value,
// 5. Interview Question.
// Pallapion

//  ! 1. Continue Last Video
// 2. Add error property
// 3. Apply Loop over form files and collect
// error
// 4. Use for loop show errors
// 5. Interview Question.

// ! 1. Continue Last Video
// 2. Add error property
// 3. Apply Loop over form files and collect
// error
// 4. Use for loop show errors
// 5. Interview Question.

// ! 1. What is Form Modifiers
// These always used with v-model and always use these with form or input 
// 2. How to use Modifiers
// Modifiers are some kind of properties of v-model 
// 3. Examples
// 4. Interview Question.

// ! 1. Make A Child Component
// 2. Pass Non-Props Data
// 3. Difference between Props and Non-Props Data
// 4. Interview Question.

// ! 1. What is Computed Property?
// ? Computed property are chached based due to its reactive property . We can use functions as well but the function will run every time . But computed property have good speed of calculation
// 2. Difference Between template Expression and
// Computed Property.
// 3. Example of Computed Property?
// 4. Interview Question

// ! 1. What are Watchers?
// ? Wathcers always see the data properties and when ever the data properties changes they call a function , and we write a function using watch and name of property and watcher will always be same
// 2. How to use Watchers?
// 3. Example
// 4. Interview Question

// ! 1. What are Slots
// ? If i want to send data to the child of different type then components have this limitation so we have to take care of this and slots has the solution for this
// 2. How to use Slots?
// 3. Example
// 4. Interview Question

// ! 1. Continue Last Video
// 2. Problem with Normal Slot?
// 3. Example of Named Slot
// 4. Interview Question
// Multiple Slots with name
