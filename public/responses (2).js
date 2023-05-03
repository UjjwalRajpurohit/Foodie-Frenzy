function getBotResponse(input) 
{
    input = input.toLowerCase();

    //general queries
    if (input.indexOf('customize') !== -1 || input.indexOf('customization') !== -1 ) 
        return 'We can customize your food.You can choose less or more spicy,low on salt,no ice,or mention some allegeries';

    else  if (input.indexOf('how') !== -1 || input.indexOf('place order') !== -1 ) 
        return 'Simple select what you want,go to cart and check out';

    else if(input.indexOf('time') !== -1 || input.indexOf('deliver') !== -1)
        return 'Please give us altelest 20 minutes to prepare fresh food for you';

    else if(input.indexOf('manager') !== -1 || input.indexOf('contact') !== -1 || input.indexOf('talk') !== -1 || input.indexOf('not received') !== -1 || input.indexOf('wrong order') !== -1 || input.indexOf('messed up') !== -1)
        return 'Please contact our Manager Mr.Singh-7738231896 or mail him at parmeetsingh72@gmail.com';
    
    else if(input.indexOf('meat') !== -1 || input.indexOf('non veg') !== -1 || input.indexOf('chicken') !== -1  || input.indexOf('mutton') !== -1 || input.indexOf('goat') !== -1 || input.indexOf('egg') !== -1 || input.indexOf('omlett') !== -1)
        return 'Sorry,we do not serve any meats.But try tasting our famous  pot-pasta and give your taste buds a ride of a lifetime';

    
    //Food queries
    if (input.indexOf('pasta') !== -1) 
        return 'We have some delicious pasta options on our menu!';

    else if (input.indexOf('pizza') !== -1) 
        return 'Try our tasty pizzas for a satisfying meal!';

    else if (input.indexOf('burger') !== -1) 
        return 'Try our juicy burgers for a satisfying meal!';

    else if (input.indexOf('dessert') !== -1 || input.indexOf('sweet') !== -1) 
        return 'Add some tasty pastries to your order for the perfect dessert!';

    else if (input.indexOf('coffee') !== -1 || input.indexOf('drink') !== -1 || input.indexOf('juice') !== -1) 
        return 'Yes.We do serve juices and coffees';

    else if (input.indexOf('today') !== -1 || input.indexOf('special') !== -1) 
        return 'Consider trying our dish of the day-Pav Bhaji';

    else if (input.indexOf('unique') !== -1 || input.indexOf('best') !== -1 || input.indexOf('famous') !== -1) 
        return 'Try our famous-Pot Pasta and fall in love with it';

    else if (input.indexOf('indian') !== -1 || input.indexOf('chinese') !== -1 || input.indexOf('indo') !== -1) 
        return 'We serve Indian foods like dosa,chaats,sabzi and sandwiches and Indo-Chinese foods like manchurian and noodles';

    else if (input.indexOf("hello") !==-1  ||input.indexOf("hi") !==-1 ||input.indexOf("hey") !==-1 ) 
        return "Hello there!";

    else if (input.indexOf("goodbye") !==-1 || input.indexOf("bye") !== -1) 
        return "Thanks for choosing Foodie Frenzy!";

    else 
    return "I don't know that.Please try asking something else!";
    
}