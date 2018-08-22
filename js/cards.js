function frontCard(title, image, imageAlt, personality, characters) {
  var article = '<article class="flip-item flip-item-front">',
    title = '<h2>' + title + '</h2>',
    image = '<img src="' + image + '" alt="' + imageAlt + '">',
    personality = '<p><i>' + personality + '</i></p>',
    characters = '<p>' + characters.join(', ') + '</p>',
    end = '</article>',
    frontCard = article + title + image + personality + characters + end;

  return frontCard;
}

function backCard(name, image, imageAlt, natures) {
  var article = '<article class="flip-item flip-item-back">',
    name = '<h2>' + name + '</h2>',
    image = '<img src="' + image + '" alt="' + imageAlt + '">',
    listNatures = '',
    end = '</article></div>',
    backCard;

  Object.keys(natures).forEach(function (key) {
    val = natures[key]
    nature = '<b>' + key + '</b><br>' + '<p>' + val + '</p>';
    listNatures += nature;
  });

  backCard = article + name + image + listNatures + end;

  return backCard;
}

$.getJSON('data/cards.json', function (data) {
  var cards = [];

  $.each(data, function (key, val) {
    var flipBox = '<div class="flip-box">',
      end = '</div>',
      card = flipBox + frontCard(val.title, val.image, val.imageAlt, val.personality, val.characters) +
        backCard(val.name, val.image, val.imageAlt, val.natures) + end;
    cards.push(card);
  });

  cards.forEach(function (card) {
    $('main').append(card);
  });
});
