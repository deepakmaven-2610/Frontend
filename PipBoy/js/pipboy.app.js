$(document).ready(function()
{
    var weapons = [
        {
            "name" : "44_pistol",
            "damage" : 48,
            "fire_rate" : 6,
            "range" : 119,
            "accuracy" : 66,
            "weight" :4.2,
            "value" :99

        },
        {
            "name" : "10mm_pistol",
            "damage" : 200,
            "fire_rate" : 10,
            "range" : 119,
            "accuracy" : 66,
            "weight" :4.2,
            "value" :99
        },
        {
            "name" : "assault_rifle",
            "damage" : 500,
            "fire_rate" : 60,
            "range" : 119,
            "accuracy" : 66,
            "weight" :4.2,
            "value" :99
        }
    ];

  $('.item-list a').on('mouseenter', function (e) {
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);

    for (item in weapons) {
        if (weapons[item].name == current_item) {
            console.log(weapons[item]);

            var container = $('.item-stats');
            container.find('.damage').html(weapons[item].damage);
            // Update other item stats here (e.g., "ammo" if needed)
            container.find('.fire_rate').html(weapons[item].fire_rate);
        }
    }
});

});