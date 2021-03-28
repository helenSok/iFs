DROP DATABASE IF EXISTS fsdb;

test

CREATE DATABASE fsdb CHARACTER SET utf8 COLLATE utf8_general_ci;

USE fsdb;

CREATE TABLE parameters (
id int PRIMARY key	AUTO_INCREMENT
,name varchar(30)
,description varchar(255)
,image_uri varchar(255)
,parameter_id int
,FOREIGN KEY (parameter_id) REFERENCES parameters(id));

insert into parameters (name, description, image_uri, parameter_id) VALUES ("Лицо", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) VALUES ("Лоб", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) VALUES ("Брови", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) VALUES ("Глаза", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) VALUES ("Нос", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) VALUES ("Рот", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) VALUES ("Уши", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) VALUES ("Подбородок", "","http://", null);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Конфигурация лица", 
            "Конфигурация лица определяется в фас путем сравнения с известными геометрическими фигурами",
            "http://", 1);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Высота лба", 
            "Высота лба определяется путем сопоставления с физиомической высотой лица (от верхней точки до подбородочной)",
            "http://", 2);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ширина лба", 
            "Ширина лба определяется путем сопоставления с шириной лица",
            "http://", 2);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Контур бровей", 
            "Контур бровей определяется по конфигурации верхнего края бровей",
            "http://", 3);            
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ширина бровей", 
            "Ширина бровей определяется по отношению наибольшей ширины брови к раскрытию глазной щели",
            "http://", 3);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Длина бровей", 
            "Длина бровей определяется по соотношению длины видимой части брови и протяженности глазной щели",
            "http://", 3);            
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Положение бровей", 
            "Положение бровей определяется положением осевых линий основных частей бровей (без хвостов) относительно горизонтали (зрачковые линии)",
            "http://", 3); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Взаиморасположение бровей", 
            "Взаиморасположение бровей определяется расстоянием между головками бровей",
            "http://", 3); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Форма глаз", 
            "Форма глаз определяется при открытых глазах по очертанию свободных (смыкающихся) краев век применительно к известным геометрическим фигурам или предметам",
            "http://", 4); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Положение глазной щели", 
            "Положение глазной щели определяется по наклону ее оси относительно горизонтали или взаимному положению углов глаз",
            "http://", 4);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Нависание верхнего века", 
            "Нависание верхнего века определяется по той его части, которая нависает над глазным яблоком",
            "http://", 4);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Эпикантус", 
            "Кожная складка, идущая от верхнего века, прикрывающая частично или полностью внутренний угол глаза (присуща монголоидам, нередко бывает у грудных детей европеоидной и других рас",
            "http://", 4);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ширина носа", 
            "Ширина носа определяется в фас по расстоянию между наиболее удаленными точками крыльев носа",
            "http://", 5);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Кончик носа", 
            "Кончик носа определяется путем сравнения силуэта кончика носа с известным геометрическими фигурам",
            "http://", 5);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Размер рта", 
            "Размер рта определяется по расстоянию между углами рта",
            "http://", 6);            
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Положение углов рта", 
            "Положение углов рта определяется относительно горизонтальной линии, проведенной через ротовую точку",
            "http://", 6);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Контур смыкания кайм губ", 
            "Контур смыкания кайм губ определяется применительно к геометрическим характеристикам линии смыкания губ",
            "http://", 6);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ширина кайм губ", 
            "Ширина кайм губ определяется в фас суммарно по отношению к высоте ротовой части лица (у женщин и детей средний показатель ширины кайм губ больше, чем у мужчин), отмечается также соотношение ширины кайм верхней и нижней губ",
            "http://", 6);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Контур носогубной впадины", 
            "Контур носогубной впадины определяется в фас по конфигурации краев носогубной впадины",
            "http://", 6);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Оттопыренность ушных раковин", 
            "Оттопыренность ушных раковин определяется в фас по отстоянию ушных раковин от головы",
            "http://", 7);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Контур ушных раковин", 
            "Контур ушных раковин определяется в профиль по очертанию, образуемому наружными краями завитка и мочки",
            "http://", 7);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Положение противозавитка", 
            "Положение противозавитка определяется в фас по отношению к завитку",
            "http://", 7);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Прикрепление мочки к щеке", 
            "Прикрепление мочки к щеке определяется в профиль по виду слияния мочки со щекой",
            "http://", 7);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Высота подбородка", 
            "Высота подбородка определяется расстоянием между надподбородочной и подбородочной точками, которое соотносится с высотой ротовой части лица",
            "http://", 8);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ширина подбородка", 
            "Ширина подбородка определяется в фас по соотношению расстояния между наиболее удаленными точками края подбородка с шириной лица",
            "http://", 8);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Форма подбородка", 
            "Форма подбородка определяется в фас путем приближения линии подбородка к очертаниям различных геометрических фигур",
            "http://", 8);

insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Округлое", 
            "Ширина и высота лица приблизительно равны",
            "Картинка",
             9);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Овальное", 
            "Ширина лица заметно меньше его высоты",
            "Картинка",
             9);
insert into parameters (name, description, image_uri, parameter_id)  
    VALUES ("Треугольное", 
            "Верхняя часть лица наиболее широкая, книзу лицо резко сужается и оканчивается заостренным подбородком",
            "Картинка",
             9);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Квадратное", 
            "Ширина и высота лица приблизительно равны, углы нижней челюсти выражены, краевая линия подбородка существенно не выступает ниже уровня углов нижней челюсти, боковые контуры прямые и параллельные",
            "Картинка",
             9);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Прямоугольное", 
            "Ширина лица меньше его высоты, углы нижней челюсти выражены, краевая линия подбородка существенно не выступает ниже уровня углов нижней челюсти, боковые контуры прямые и параллельные",
            "Картинка",
             9);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Высокий", 
            "Высота лба больше 1/3 высоты лица",
            "Картинка",
             10);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средний", 
            "Высота лба равна 1/3 высоты лица",
            "Картинка",
             10);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Низкий", 
            "Высота лба меньше 1/3 высоты лица",
            "Картинка",
             10);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Широкий", 
            "Ширина лба больше ширины лица",
            "Картинка",
             11);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средний", 
            "Ширина лба совпадает с шириной лица",
            "Картинка",
             11);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Узкий", 
            "Ширина лба меньше ширины лица",
            "Картинка",
             11);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Прямой", 
            "Верхний край бровей образует прямую линию, хвосты бровей могут незначительно опускаться",
            "Картинка",
             12);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Дугообразный", 
            "Верхний край бровей образует дугообразную линию",
            "Картинка",
             12);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Извилистый", 
            "Верхний край бровей представляет собой неровную линию с закругленными переходами",
            "Картинка",
             12);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ломаный", 
            "Верхний край бровей образует неровную линию с изломами, углами",
            "Картинка",
             12);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Треугольный", 
            "Разновидность ломаных бровей, верхний край бровей образует угол, всегда один",
            "Картинка",
             12); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Широкие", 
            "Ширина бровей превышает раскрытие глазной щели",
            "Картинка",
             13); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средние", 
            "Ширина бровей немного меньше или равна раскрытию глазной щели",
            "Картинка",
             13); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Узкие", 
            "Ширина бровей не более половины раскрытия глазной щели (брови малозаметные)",
            "Картинка",
             13); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Расширенные к вискам", 
            "Ширина бровей в хвостовой части больше, чем в головке",
            "Картинка",
             13); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Суженные к вискам", 
            "Ширина бровей в хвостовой части меньше, чем в головке",
            "Картинка",
             13); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Длинные", 
            "Протяженность брови заметно больше длины глазной щели",
            "Картинка",
             14); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средние", 
            "Длина брови и протяженность глазной щели практически равны",
            "Картинка",
             14); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Короткие", 
            "Длина брови заметно короче глазной щели",
            "Картинка",
             14); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Горизонтальное", 
            "Линия горизонтальна или отклонена от горизонтали не более чем на 5 градусов",
            "Картинка",
             15); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Косовнутреннее", 
            "Линия скошена к переносью",
            "Картинка",
             15); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Косонаружное", 
            "Линия скошена к вискам",
            "Картинка",
             15); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Среднее", 
            "Расстояние между головками бровей равно 1/4 ширины лица на уровне головок",
            "Картинка",
             16); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Сближенное", 
            "Расстояние между головками бровей меньше 1/4 ширины лица на уровне головок",
            "Картинка",
             16); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Далеко расставленное", 
            "Расстояние между головками бровей больше 1/4 ширины лица на уровне головок",
            "Картинка",
             16); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Миндалевидные", 
            "Миндалевидные",
            "Картинка",
             17); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Овальные", 
            "Овальные",
            "Картинка",
             17); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Круглые", 
            "Круглые",
            "Картинка",
             17); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Треугольные", 
            "Треугольные",
            "Картинка",
             17); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Щелевидные", 
            "Прищуренные",
            "Картинка",
             17); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Сегментовидные", 
            "Сегментовидные",
            "Картинка",
             17);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ракетка", 
            "Контур подобен миндалевидному или овальному, но внутренний угол глаза удлинен",
            "Картинка",
             17); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Серповидные", 
            "Серповидные",
            "Картинка",
             17); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Горизонтальное", 
            "Внутренние и наружные углы глаз находятся на одной горизонтальной линии",
            "Картинка",
             18); 
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Косовнутреннее", 
            "Внутренние углы глаз ниже наружных",
            "Картинка",
             18);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Косонаружное", 
            "Внутренние углы глаз выше наружных",
            "Картинка",
             18);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Среднее", 
            "Складка верхнего века нависает над серединой глаза, углы глаз видны",
            "Картинка",
             19);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Среднебоковое", 
            "Складка верхнего века прикрывает среднюю часть глазной щели и наружный угол глаза",
            "Картинка",
             19);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Отсутствие нависания", 
            "Видна вся подвижная часть верхнего века",
            "Картинка",
             19);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Отсутствие с развитым веком", 
            "Отсутствие нависания со значительным развитием подвижной части века - как бы выпуклое веко",
            "Картинка",
             19);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ассиметричное", 
            "У правого и левого глаза различные виды нависания",
            "Картинка",
             19);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Имеется", 
            "Имеется",
            "Картинка",
             20);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Не имеется", 
            "Не имеется",
            "Картинка",
             20);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Малая", 
            "Ширина носа равна 2/3 высоты носа или меньше",
            "Картинка",
             21);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средняя", 
            "Ширина носа равна 3/4 его спинки",
            "Картинка",
             21);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Большая", 
            "Ширина носа равна высоте носа или больше нее",
            "Картинка",
             21);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Округлый", 
            "Округлый",
            "Картинка",
             22);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Заостренный", 
            "Заостренный",
            "Картинка",
             22);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Малый", 
            "Расстояние между углами рта меньше половины ширины лица на этом уровне",
            "Картинка",
             23);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средний", 
            "Расстояние между углами рта равно половине ширины лица на этом уровне",
            "Картинка",
             23);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Большой", 
            "Расстояние между углами рта больше половины ширины лица на этом уровне",
            "Картинка",
             23);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Горизонтальное", 
            "Горизонтальное",
            "Картинка",
             24);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Приподнятое", 
            "Приподнятое",
            "Картинка",
             24);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Опущенное", 
            "Опущенное",
            "Картинка",
             24);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Прямой", 
            "Прямой",
            "Картинка",
             25);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Дугообразный", 
            "Вогнутая линия смыкания краев губ (углы рта выше середины ротовой щели), выпуклая линия смыкания краев губ (углы рта ниже середины ротовой щели)",
            "Картинка",
             25);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Волнистый", 
            "Волнистый",
            "Картинка",
             25);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Ломаный", 
            "Ломаный",
            "Картинка",
             25);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Малая", 
            "Ширина кайм губ меньше 1/4 высоты ротовой части лица",
            "Картинка",
             26);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средняя", 
            "Ширина кайм губ равна 1/4 высоты ротовой части лица",
            "Картинка",
             26);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Большая", 
            "Ширина кайм губ больше 1/4 высоты ротовой части лица",
            "Картинка",
             26);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Прямоугольный", 
            "Края носогубной впадины параллельны",
            "Картинка",
             27);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Треугольный", 
            "Края носогубной впадины расположены под углом друг к другу",
            "Картинка",
             27);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Овальный", 
            "Края носогубной впадины изогнуты в виде дуг",
            "Картинка",
             27);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Малая", 
            "Отсутствие оттопырености. Видимая спереди часть обеих ушных раковин составляет прмерно 4-8% наибольшей ширины лица, прижатые ушные раковины",
            "Картинка",
             28);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средняя", 
            "Видимая спереди часть обеих ушных раковин в сумме составляет 15-20% наибольшей ширины лица",
            "Картинка",
             28);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Большая", 
            "Видимая спереди часть обеих ушных раковин составляет примерно 40% наибольшей ширины лица",
            "Картинка",
             28);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Верхняя", 
            "Наиболее оттопырена верхняя часть ушной раковины область завитка",
            "Картинка",
             28);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Нижняя", 
            "Наиболее оттопырена нижняя часть ушной раковины область мочки",
            "Картинка",
             28);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Круглый", 
            "Контур наружного края ушной раковины округлый, ее высота и ширина почти равны",
            "Картинка",
             29);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Овальный", 
            "Контур наружного края ушной раковины округлый, ширина меньше высоты",
            "Картинка",
             29);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Прямоугольный", 
            "Контур наружного края ушной раковины угловатый, прямоугольной формы, ширина верхней и нижней части ушной раковины примерно одинаковы",
            "Картинка",
             29);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Треугольный", 
            "Контур наружного края ушной раковины треугольный, верхняя ее часть широкая, книзу сужается",
            "Картинка",
             29);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Выступающий", 
            "Противозавиток выступает над плоскостью ушной раковины и препятствует наблюдению завитка",
            "Картинка",
             30);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Втянутый", 
            "Противозавиток над плоскостью ушной раковины не выступает и не препятствует наблюдению завитка",
            "Картинка",
             30);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Отделенная", 
            "Передний край мочки свободен, отделен от щеки",
            "Картинка",
             31);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Слитная", 
            "Передняя сторона мочки на всем ее протяжении прикреплена к щеке",
            "Картинка",
             31);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Низкий", 
            "Высота подбородка равна 1/3 высоты ротовой части лица",
            "Картинка",
             32);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средний", 
            "Высота подбородка равна половине высоты ротовой части лица",
            "Картинка",
             32);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Высокий", 
            "Высота подбородка равна 2/3 высоты ротовой части лица",
            "Картинка",
             32);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Узкий", 
            "Ширина подбородка равна 1/4 ширины лица и менее",
            "Картинка",
             33);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Средний", 
            "Ширина подбородка равна 1/3 ширины лица",
            "Картинка",
             33);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Широкий", 
            "Ширина подбородка равна половине ширины лица",
            "Картинка",
             33);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Закругленный", 
            "Линия свободного края овальная",
            "Картинка",
             34);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Треугольный", 
            "Линия свободного края угловатая, близка к треугольнику",
            "Картинка",
             34);
insert into parameters (name, description, image_uri, parameter_id) 
    VALUES ("Квадратный", 
            "Линия свободного края с двумя углами, близкая к прямоугольнику, трапеции",
            "Картинка",
             34);

CREATE TABLE races (
id int PRIMARY key	AUTO_INCREMENT
,name varchar(15));
insert into races(name) VALUES ("Европеоидная");
insert into races(name) VALUES ("Азиатская");
insert into races(name) VALUES ("Негроидная");
insert into races(name) VALUES ("Монголоидная");
insert into races(name) VALUES ("Арабская");

CREATE TABLE genders (
id int PRIMARY key	AUTO_INCREMENT
,name varchar(20));
insert into genders(name) VALUES ("Мужской");
insert into genders(name) VALUES ("Женский");

CREATE TABLE material_types (
id int PRIMARY key AUTO_INCREMENT
,name varchar(20));

insert into material_types (name) VALUES ("Фото");
insert into material_types (name) VALUES ("Видео");
insert into material_types (name) VALUES ("Описание внешности");


CREATE TABLE materials (
id int PRIMARY key	AUTO_INCREMENT
,uri varchar(30)
,age varchar(10)
,type_id int not null
,race_id int
,gender_id int
,FOREIGN KEY (race_id) REFERENCES races(id)
,FOREIGN KEY (gender_id) REFERENCES genders(id)
,FOREIGN KEY (type_id) REFERENCES material_types(id));

insert into materials (uri, age, type_id, race_id, gender_id) VALUES ("Картинка", "24", 1, 1, 1);

CREATE TABLE material_likes (
material_id int not null
,like_id int not null
,like_percent int
,FOREIGN KEY (material_id) REFERENCES materials(id)
,FOREIGN KEY (like_id) REFERENCES materials(id)
,PRIMARY KEY (material_id, like_id));

CREATE TABLE user_roles (
id int PRIMARY key	AUTO_INCREMENT
,name varchar(30));
insert into user_roles (name) VALUES ("Администратор");
insert into user_roles (name) VALUES ("Пользователь");

CREATE TABLE users (
id int PRIMARY key	AUTO_INCREMENT
,login varchar(30)
,pass varchar(30)
,sirname varchar(30) 
,name varchar(30)
,created datetime   
,role_id int not null
,FOREIGN KEY (role_id) REFERENCES user_roles(id));
insert into users (login, pass, name, sirname, created, role_id) VALUES ("golubev@mail.ru", "123", "Голубев", "Павел", CURRENT_DATE, 1);
insert into users (login, pass, name, sirname, created, role_id) VALUES ("steshin@mail.ru", "123", "Стешин", "Александр", CURRENT_DATE, 1);

CREATE TABLE operations (
id int PRIMARY key AUTO_INCREMENT
,name varchar(60));

CREATE TABLE user_logs (
id int PRIMARY key	AUTO_INCREMENT
,log_date date
,param_before varchar(60)
,param_after varchar(60)    
,user_id int not null
,operation_id int not null
,FOREIGN KEY (user_id) REFERENCES users(id)
,FOREIGN KEY (operation_id) REFERENCES operations(id));

CREATE TABLE exercise_types (
id int PRIMARY key	AUTO_INCREMENT
,name varchar(15)
,short_name varchar(1));
insert into exercise_types (name, short_name) VALUES ("Тренировка", "Т");
insert into exercise_types (name, short_name) VALUES ("Контроль", "К");

CREATE TABLE exercise_levels (
id int PRIMARY key	AUTO_INCREMENT
,name varchar(15));
insert into exercise_levels (name) VALUES ("Низкий");
insert into exercise_levels (name) VALUES ("Средний");
insert into exercise_levels (name) VALUES ("Сложный");

CREATE TABLE exercises (
id int PRIMARY key	AUTO_INCREMENT
,title varchar(40)
,name varchar(255)
,purpose varchar(255)
,description varchar(255)
,uri varchar(70));
insert into exercises (title, name, purpose, description, uri) 
    VALUES ("Упражнение 1", 
            "Описание элементов внешности по фотоснимку",
            "Отработка техники выявления криминалистических особенностей на лице", 
            "Это упражнение предназначено...", 
            "/main/exerciseFirst/element");
insert into exercises (title, name, purpose, description, uri) 
    VALUES ("Упражнение 2", 
            "Описание элементов внешности по фотоснимку в условиях кратковременного предъявления",
            "Тренировка функции формирования (запоминания) мысленного образа и классификации элементов внешности в условиях ограниченного времени восприятия",
            "Это упражнение предназначено...", 
            "/main/exerciseFirst/element");
insert into exercises (title, name, purpose, description, uri) 
    VALUES ("Упражнение 3", 
            "Сравнение фотографий с набором фотографий",
            "Тренировка функций принятия решения об идентичности лица предъявителя с фотографией в предъявляемом им документе",
            "Это упражнение предназначено...", 
            "/main/exerciseFirst/face");
insert into exercises (title, name, purpose, description, uri) 
    VALUES ("Упражнение 4", 
            "Сравнение видеоизображения лица пассажира с набором фотографий", 
            "Тренировка функций принятия решения об идентичности лица из видеоизображения с фотографией в предъявляемом им документе",
            "Это упражнение предназначено...", 
            "/main/exerciseFirst/face");
insert into exercises (title, name, purpose, description, uri) 
    VALUES ("Упражнение 5", 
            "Сравнение трехмерного изображения лица с набором фотографий", 
            "Тренировка функций принятия решения об идентификации лица предъявителя с фотографией в его документе",
            "Это упражнение предназначено...", 
            "/main/exerciseFirst/face");
insert into exercises (title, name, purpose, description, uri) 
    VALUES ("Упражнение 6", 
            "Принятие решения по мысленному образу", 
            "Тренировка функции принятия решения по мысленному образу",
            "Это упражнение предназначено...", 
            "/main/exerciseFirst/face");

CREATE TABLE exercise_settings (
id int PRIMARY key	AUTO_INCREMENT
,execute_time varchar(5)
,material_count int
,actual int
,created date
,material_type_id int
,exercise_type_id int not null
,user_id int not null
,exercise_id int not null
,level_id int not null
,FOREIGN KEY (material_type_id) REFERENCES material_types(id)
,FOREIGN KEY (exercise_type_id) REFERENCES exercise_types(id)
,FOREIGN KEY (user_id) REFERENCES users(id)
,FOREIGN KEY (exercise_id) REFERENCES exercises(id)
,FOREIGN KEY (level_id) REFERENCES exercise_levels(id));
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 1, 1, 1, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 1, 2, 1, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(30, 1, 1, 1, CURRENT_DATE, 1, 1, 2, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(30, 1, 1, 0, CURRENT_DATE, 2, 1, 2, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(25, 1, 1, 1, CURRENT_DATE, 2, 1, 2, 2);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 1, 1, 3, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 2, 2, 3, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 1, 1, 4, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 2, 2, 4, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 1, 1, 5, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 2, 2, 5, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 1, 1, 6, 3);
insert into exercise_settings(execute_time, material_type_id, material_count, actual, created, exercise_type_id, user_id, exercise_id, level_id) values(null, 1, 1, 1, CURRENT_DATE, 2, 2, 6, 3);


CREATE TABLE marks (
id int PRIMARY key	AUTO_INCREMENT   
,name varchar(25)
,short_name varchar(6));
insert into marks (name, short_name) VALUES ("Отлично", "отл");
insert into marks (name, short_name) VALUES ("Хорошо", "хор");
insert into marks (name, short_name) VALUES ("Удовлетворительно", "удов");
insert into marks (name, short_name) VALUES ("Неудовлетворительно", "неудов");

CREATE TABLE results (
id int PRIMARY key	AUTO_INCREMENT   
,exercise_setting_id int not null
,mark_id int
,current_ball int
,result_date datetime
,answer varchar(255)
,material_id int
,FOREIGN KEY (material_id) REFERENCES materials(id)
,FOREIGN KEY (exercise_setting_id) REFERENCES exercise_settings(id)
,FOREIGN KEY (mark_id) REFERENCES marks(id));
insert into results (exercise_setting_id, mark_id, current_ball, result_date, material_id) VALUES (1, 1, 23, CURRENT_TIMESTAMP, 1);
insert into results (exercise_setting_id, mark_id, current_ball, result_date, material_id) VALUES (2, 1, 26, CURRENT_TIMESTAMP, 1);
insert into results (exercise_setting_id, mark_id, current_ball, result_date, material_id) VALUES (3, 1, 26, CURRENT_TIMESTAMP, 1);
insert into results (exercise_setting_id, mark_id, current_ball, result_date, material_id) VALUES (1, 1, 25, CURRENT_TIMESTAMP, 1);


CREATE TABLE material_parameters (
material_id int not null
,parameter_id int not null
,FOREIGN KEY (material_id) REFERENCES materials(id)
,FOREIGN KEY (parameter_id) REFERENCES parameters(id)
,PRIMARY KEY (material_id, parameter_id));

insert into material_parameters (material_id, parameter_id) VALUES (1, 35);
insert into material_parameters (material_id, parameter_id) VALUES (1, 40);
insert into material_parameters (material_id, parameter_id) VALUES (1, 43);
insert into material_parameters (material_id, parameter_id) VALUES (1, 46);
insert into material_parameters (material_id, parameter_id) VALUES (1, 51);
insert into material_parameters (material_id, parameter_id) VALUES (1, 56);
insert into material_parameters (material_id, parameter_id) VALUES (1, 59);
insert into material_parameters (material_id, parameter_id) VALUES (1, 62);
insert into material_parameters (material_id, parameter_id) VALUES (1, 65);
insert into material_parameters (material_id, parameter_id) VALUES (1, 73);
insert into material_parameters (material_id, parameter_id) VALUES (1, 76);
insert into material_parameters (material_id, parameter_id) VALUES (1, 81);
insert into material_parameters (material_id, parameter_id) VALUES (1, 83);
insert into material_parameters (material_id, parameter_id) VALUES (1, 86);
insert into material_parameters (material_id, parameter_id) VALUES (1, 88);
insert into material_parameters (material_id, parameter_id) VALUES (1, 91);
insert into material_parameters (material_id, parameter_id) VALUES (1, 94);
insert into material_parameters (material_id, parameter_id) VALUES (1, 98);
insert into material_parameters (material_id, parameter_id) VALUES (1, 101);
insert into material_parameters (material_id, parameter_id) VALUES (1, 104);
insert into material_parameters (material_id, parameter_id) VALUES (1, 109);
insert into material_parameters (material_id, parameter_id) VALUES (1, 113);
insert into material_parameters (material_id, parameter_id) VALUES (1, 115);
insert into material_parameters (material_id, parameter_id) VALUES (1, 117);
insert into material_parameters (material_id, parameter_id) VALUES (1, 120);
insert into material_parameters (material_id, parameter_id) VALUES (1, 123);


