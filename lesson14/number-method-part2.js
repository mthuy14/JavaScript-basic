// parseFloat() - Phân tích 1 chuỗi string và trả về 1 số thực. Nó sẽ phân tích từ trái qua phải -> cho đến khi nào không thể phân tích được nữa
console.log('("3.14") = ', parseFloat("3.14"));

// parseInt() - Phân tích 1 chuỗi string và trả về 1 số nguyên. Phan tích từ trái qua phải đến khi không phân tích được nữa. Ngoài ra có thể chuyển đổi các cơ số(radix) khấc vè dạng số nguyên
console.log('"23" = ', parseInt("23"));
console.log('"10ac" = ', parseInt("10ac")); // phan tich den khi gap char
console.log('"1010" = ', parseInt("1001", 2)); // nó cho biết rằng 1010 là dạng Nhị phân
console.log("'abc' = ", parseInt("abc"));

// valueOf() - Với Number: lấy ra giá trị thực sự bên trong obj
//             Với Date: lấy được timestamp - và nó được tính bằng mili giây
const numObj = new Number(123);
console.log(typeof numObj);

const numValue = numObj.valueOf();
console.log(typeof numValue);

// timestamp
console.log("Timestamp khi chạy chương trình này: ", new Date().valueOf());
console.log("Time stamp của 2007-08-14: ", new Date("2007-08-14").valueOf());

// Number.MAX_VALUE - trong JavaScript sẽ có 1 giá trị đại diện cho 1 số lớn nhất là 1.7976931348623157e+308 . Nếu vượt qua số này thì sẽ là +Infinity, Gần với nó thì vẫn sẽ được gọi là max
const max = Number.MAX_VALUE;
console.log(max);

// Number.MIN_VALUE - trong JavaScript sẽ có 1 giá trị đại diện cho 1 số nhỏ nhất là 5e-324 . Nếu số nào nhỏ hơn thì 5e-324 sẽ được làm tròn về 0 , Gần với nó thì vẫn sẽ được gọi là Min (nó không phải số âm mà là 1 số gần 0)
const min = Number.MIN_VALUE;
console.log(min / 2);

// Number.POSITIVE_INFINITY - giá trị dương vô cực, đại diện cho 1 số vô hạn
const positiveInfinity = Number.POSITIVE_INFINITY;
console.log("Dương vô cực: ", positiveInfinity);

// Number.NEGATIVE_INFINITY - giá trị âm vô cực, đại diện cho 1 số âm vô hạn
const negaInfinity = Number.NEGATIVE_INFINITY;
console.log("Âm vô cực: ", negaInfinity);
