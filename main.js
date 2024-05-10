
document.addEventListener('DOMContentLoaded', function() {


// Hiển thị form khi nhấn logo3
var logo3 = document.querySelector('.logo3');  // Tìm element có class 'logo3'

if (logo3) { 
  logo3.addEventListener('click', function() {  // Gắn bộ lắng nghe sự kiện click cho element
    var dangnhap = document.querySelector('.dangnhap');  // Tìm element có class 'dangnhap'
    var dangki = document.querySelector('.dangki');  // Tìm element có class 'dangki'
    var aa = document.querySelector('.aa');  // Tìm element có class 'aa'

    if (dangnhap) {
      dangnhap.style.display = 'block';  // Thiết lập hiển thị element 'dangnhap'
    }
    if (dangki) {
      dangki.style.display = 'none';  // Ẩn element 'dangki'
    }
    if (aa) {
      aa.style.display = 'block';  // Thiết lập hiển thị element 'aa'
    }
  });
}

// Click vào nút đăng kí (form đăng kí)
var dangki = document.getElementById('dangki');  // Lấy element có id 'dangki'
if (dangki) {  // Kiểm tra xem element có tồn tại không
  dangki.addEventListener('click', function(e) {  // Gắn bộ lắng nghe sự kiện click cho element
    e.preventDefault();  

    // Xóa các thông báo lỗi cũ nếu có
    var invalidFeedback = document.querySelectorAll('.invalid-feedback');
    invalidFeedback.forEach(function(element) {
      element.remove();  // Xóa các element chứa thông báo lỗi
    });

    var isFormValid = true;  // Biến kiểm tra tính hợp lệ của form
    var inputs = document.querySelectorAll('.red');  

    inputs.forEach(function(input) {
      if (input.value.trim() === '') {  // Kiểm tra nếu input trống
        input.classList.add('is-invalid');  // Thêm class để hiển thị trạng thái lỗi
        isFormValid = false;  // Cập nhật form không hợp lệ
        var errorMessage = document.createElement('p');  // Tạo element <p> mới cho thông báo lỗi
        errorMessage.classList.add('invalid-feedback3');  // Thêm class cho element thông báo lỗi
        errorMessage.textContent = 'Please enter complete information!';  // Thiết lập nội dung thông báo lỗi
        input.parentNode.appendChild(errorMessage);  // Thêm thông báo lỗi vào DOM ngay sau input
      } else {
        input.classList.remove('is-invalid');  // Xóa class lỗi nếu input đã được điền
      }
    });

    if (isFormValid) {  // Nếu form hợp lệ
      // Chuyển đến phần đăng nhập
      var dangnhap = document.querySelector('.dangnhap');
      var dangki = document.querySelector('.dangki');

      if (dangnhap) {
        dangnhap.style.display = 'block';  // Hiển thị form đăng nhập
      }
      if (dangki) {
        dangki.style.display = 'none';  // Ẩn form đăng kí
      }

      // Xóa dữ liệu trên các trường khi chuyển sang phần đăng nhập
      var dangnhapInputs = document.querySelectorAll('.dangnhap input');
      dangnhapInputs.forEach(function(input) {
        input.value = '';  // Xóa giá trị của từng input
      });

      
    }
  });
}

// Lấy phần tử có ID là 'login1' và gán vào biến login1.
var login1 = document.getElementById('login1');

// Kiểm tra xem phần tử có tồn tại không.
if (login1) {
  // Thêm bộ nghe sự kiện click cho nút đăng nhập.
  login1.addEventListener('click', function(e) {
    // Ngăn sự kiện mặc định để không gửi form khi click vào nút.
    e.preventDefault();

    // Lấy giá trị nhập vào từ các ô nhập liệu cho tên đăng nhập và mật khẩu, đồng thời loại bỏ khoảng trắng ở hai đầu.
    var loginName = document.getElementById('loginName').value.trim();
    var loginPassword = document.getElementById('loginPassword').value.trim();

    // Xóa các thông báo lỗi đã hiển thị trước đó.
    var invalidFeedback1 = document.querySelectorAll('.invalid-feedback1');
    invalidFeedback1.forEach(function(element) {
      element.remove();
    });

    // Kiểm tra nếu tên đăng nhập trống.
    if (loginName === '') {
      // Thêm class 'is-invalid' để hiển thị thông báo lỗi.
      document.getElementById('loginName').classList.add('is-invalid');
      var errorMessage = document.createElement('p');
      errorMessage.classList.add('invalid-feedback1');
      errorMessage.textContent = 'Please enter your username!';
      document.getElementById('loginName').parentNode.appendChild(errorMessage);
    } else {
      // Xóa class 'is-invalid' nếu người dùng đã nhập tên.
      document.getElementById('loginName').classList.remove('is-invalid');
    }

    // Kiểm tra nếu mật khẩu trống.
    if (loginPassword === '') {
      document.getElementById('loginPassword').classList.add('is-invalid');
      var errorMessage = document.createElement('p');
      errorMessage.classList.add('invalid-feedback1');
      errorMessage.textContent = 'Please enter a password!';
      document.getElementById('loginPassword').parentNode.appendChild(errorMessage);
    } else {
      document.getElementById('loginPassword').classList.remove('is-invalid');
    }

    // Kiểm tra nếu cả tên đăng nhập và mật khẩu đều trống.
    if (loginName === '' || loginPassword === '') {
      var errorMessage = document.createElement('p');
      errorMessage.classList.add('invalid-feedback2');
      // Gán thông báo lỗi vào nút đăng nhập
      document.getElementById('login1').parentNode.appendChild(errorMessage);
    } else {
      // Xử lý các trường hợp khác, ẩn hoặc hiển thị các phần tử tương ứng.
      var dangnhap = document.querySelector('.dangnhap');
      var aa = document.querySelector('.aa');

      // Ẩn các phần tử nếu chúng tồn tại.
      if (dangnhap) {
        dangnhap.style.display = 'none';
      }
      if (aa) {
        aa.style.display = 'none';
      }

      // Xóa các giá trị đã nhập trong các form khác.
      var dangnhapInputs = document.querySelectorAll('.dangnhap input');
      dangnhapInputs.forEach(function(input) {
        input.value = '';
      });

      var dangkiInputs = document.querySelectorAll('.dangki input');
      dangkiInputs.forEach(function(input) {
        input.value = '';
      });

      // Ẩn và hiển thị các phần tử logo và guest.
      var logo3 = document.querySelector('.logo3');
      var guest = document.querySelector('#Guest');

      if (logo3) {
        logo3.style.display = 'none';
      }
      if (guest) {
        guest.style.display = 'block';
      }

      // Xử lý sự kiện click cho nút đăng nhập.
      var signInButton = document.getElementById('signInButton');
      if (signInButton) {
        signInButton.addEventListener('click', function(e) {
          e.preventDefault();
          // Xử lý đăng nhập, ví dụ chuyển hướng sang trang thành công.
          window.location.href = 'success.html';
        });
      }

      // Xử lý khi người dùng focus vào ô nhập liệu, xóa thông báo lỗi.
      var loginInputs = document.querySelectorAll('.login-input');
      loginInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
          input.classList.remove('is-invalid');
          var invalidFeedback = input.parentNode.querySelector('.invalid-feedback1');
          if (invalidFeedback) {
            invalidFeedback.remove();
          }
        });
      });
    
    }
  });
}
// Xử lý sự kiện click vào phần tử có ID 'Guest' để hiển thị hoặc ẩn phần tử có class 'logout'.
var guestElement = document.querySelector('#Guest');
var logoutElement = document.querySelector('.logout');

guestElement.addEventListener('click', function() {
  // Kiểm tra trạng thái hiện tại và thay đổi giữa ẩn hoặc hiện phần tử 'logout'.
  if (logoutElement.style.display === 'none') {
    logoutElement.style.display = 'block';
  } else {
    logoutElement.style.display = 'none';
  }
});
// Xử lý sự kiện click vào phần tử có ID 'out1' để ẩn 'Guest' và hiển thị 'logo3'.
var logo3Element = document.querySelector('.logo3');
var out1Element = document.querySelector('#out1');
var guestElement = document.querySelector('#Guest');

out1Element.addEventListener('click', function() {
  guestElement.style.display = 'none';
  logo3Element.style.display = 'block';
});

// Xử lý sự kiện click vào nút đăng ký, ẩn phần 'dangnhap' và hiển thị phần 'dangki'.
var register = document.getElementById('register');
if (register) {
  register.addEventListener('click', function() {
    var dangnhap = document.querySelector('.dangnhap');
    var dangki = document.querySelector('.dangki');

    // Ẩn phần đăng nhập và hiển thị phần đăng ký.
    if (dangnhap) {
      dangnhap.style.display = 'none';
    }
    if (dangki) {
      dangki.style.display = 'block';
    }

    // Xóa nội dung đã nhập và thông báo lỗi từ các input trong phần 'dangki'.
    var dangkiInputs = document.querySelectorAll('.dangki input');
    dangkiInputs.forEach(function(input) {
      input.value = '';
      input.classList.remove('is-invalid');
    });

    var invalidFeedback = document.querySelectorAll('.invalid-feedback3');
    invalidFeedback.forEach(function(element) {
      element.remove();
    });
  });
}

// Xử lý sự kiện click vào nút 'close' để ẩn phần 'dangnhap' và 'aa'.
var cl = document.querySelectorAll('.close');
cl.forEach(function(element) {
  element.addEventListener('click', function() {
    var dangnhap = document.querySelector('.dangnhap');
    var aa = document.querySelector('.aa');

    // Ẩn các phần tử này.
    if (dangnhap) {
      dangnhap.style.display = 'none';
    }
    if (aa) {
      aa.style.display = 'none';
    }

    // Xóa nội dung đã nhập và thông báo lỗi từ các input trong 'dangnhap'.
    var dangnhapInputs = document.querySelectorAll('.dangnhap input');
    dangnhapInputs.forEach(function(input) {
      input.value = '';
      input.classList.remove('is-invalid');
    });

    var invalidFeedback = document.querySelectorAll('.invalid-feedback1');
    invalidFeedback.forEach(function(element) {
      element.remove();
    });
  });
});

// Xử lý sự kiện click vào nút 'close1' để ẩn phần 'dangki' và xóa nội dung đã nhập.
var cl1 = document.querySelectorAll('.close1');
cl1.forEach(function(element) {
  element.addEventListener('click', function() {
    // Tìm và gán các phần tử 'dangnhap', 'dangki' và 'aa'.
    var dangnhap = document.querySelector('.dangnhap');
    var dangki = document.querySelector('.dangki');
    var aa = document.querySelector('.aa');

    // Ẩn phần đăng ký và các phần tử liên quan.
    if (dangki) {
      dangki.style.display = 'none';
    }
    if (aa) {
      aa.style.display = 'none';
    }

    // Xóa nội dung và thông báo lỗi từ các input trong 'dangki' và 'dangnhap'.
    var dangkiInputs = document.querySelectorAll('.dangki input');
    dangkiInputs.forEach(function(input) {
      input.value = ''; // Xóa nội dung của input
      input.classList.remove('is-invalid'); // Loại bỏ lớp 'is-invalid' (đánh dấu là lỗi) nếu có
    });

    var invalidFeedback = document.querySelectorAll('.invalid-feedback3');
    invalidFeedback.forEach(function(element) {
      element.remove(); // Xóa các thông báo lỗi có lớp 'invalid-feedback3'
    });

    var dangnhapInputs = document.querySelectorAll('.dangnhap input');
    dangnhapInputs.forEach(function(input) {
      input.value = ''; // Xóa nội dung của input
      input.classList.remove('is-invalid'); // Loại bỏ lớp 'is-invalid' (đánh dấu là lỗi) nếu có
    });

    var invalidFeedback1 = document.querySelectorAll('.invalid-feedback1');
    invalidFeedback1.forEach(function(element) {
      element.remove(); // Xóa các thông báo lỗi có lớp 'invalid-feedback1'
    });
  });
});


// click vao gior hang
var shop = document.getElementById('shop');
if (shop) {
  shop.addEventListener('click', function() {
    var giohang = document.querySelector('.giohang');

    if (giohang) {
      if (giohang.style.display === 'block') {
        giohang.style.display = 'none';
      } else {
        giohang.style.display = 'block';
      }
    }
  });
}

});
// chữ tiêu đề
const title = document.getElementById("title");
let position = 0;

setInterval(() => {
  title.style.backgroundPosition = `${position}px 0`;
  position++;
}, 10);

// khung mess
function sendmesss() {
  var isFormValid = validateForm(); // Kiểm tra các trường đã nhập đủ hay chưa

  if (isFormValid) {
    // Xóa nội dung của phần tử errorContainer
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerText = '';

    // Xóa nội dung các trường nhập liệu
    var inputEmail = document.getElementById('floatingInput');
    var inputPassword = document.getElementById('floatingPassword');
    var textareaEmail = document.getElementById('floatingTextarea');
    var textareaMessage = document.getElementById('floatingTextarea2');

    inputEmail.value = '';
    inputPassword.value = '';
    textareaEmail.value = '';
    textareaMessage.value = '';

    alert('Gửi tin nhắn thành công!');
  } else {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerText = 'Please enter complete information!';
  }
}

function validateForm() {
  var inputEmail = document.getElementById('floatingInput');
  var inputPassword = document.getElementById('floatingPassword');
  var textareaEmail = document.getElementById('floatingTextarea');
  var textareaMessage = document.getElementById('floatingTextarea2');

  if (
    inputEmail.value.trim() === '' ||
    inputPassword.value.trim() === '' ||
    textareaEmail.value.trim() === '' ||
    textareaMessage.value.trim() === ''
  ) {
    return false; // Trường chưa được nhập đủ
  }

  return true; // Các trường đã được nhập đủ
}


///lọc sản phẩm
// Lấy tất cả các phần tử nút điều khiển có thẻ div trong phần tử có lớp là 'control'
var buttons = document.querySelectorAll('.control div');

// Duyệt qua mỗi phần tử nút điều khiển và thêm sự kiện click
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Lấy giá trị của thuộc tính 'type' từ phần tử nút điều khiển hiện tại
    var type = this.getAttribute('type');

    // Lấy tất cả các sản phẩm có lớp là 'category'
    var products = document.querySelectorAll('.category');

    // Duyệt qua mỗi sản phẩm
    products.forEach(function(product) {
      // Kiểm tra nếu 'type' là 'all' hoặc 'type' của sản phẩm khớp với 'type' của nút điều khiển
      if (type === 'all' || product.getAttribute('type') === type) {
        product.style.display = 'block'; // Hiển thị sản phẩm
      } else {
        product.style.display = 'none'; // Ẩn sản phẩm
      }
    });

    // Loại bỏ lớp 'active' từ tất cả các nút điều khiển
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Thêm lớp 'active' vào nút điều khiển hiện tại
    this.classList.add('active');

    // Xóa lớp 'active-color' từ tất cả các nút điều khiển
    buttons.forEach(function(btn) {
      btn.classList.remove('active-color');
    });

    // Thêm lớp 'active-color' vào nút điều khiển hiện tại
    this.classList.add('active-color');
  });
});

  


//(click trên tthanh Home)
document.getElementById("contact").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("khung1");
  khung1.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("Testimonial").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("opinion");
  khung1.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("aboutus").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("lay3");
  khung1.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Products").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("goods");
  khung1.scrollIntoView({ behavior: "smooth" });
});


//thanh search

const searchInput = document.getElementById('search');
const container = document.getElementById('container');
const iconSearch = document.getElementById('iconsearch');
// Xử lý sự kiện khi người dùng nhập vào thanh tìm kiếm
function handleSearch() {
  // Lấy giá trị tìm kiếm từ thanh nhập
  const searchTerm = searchInput.value.toLowerCase();
  // Lấy danh sách các sản phẩm
  const products = container.getElementsByClassName('category');
  let found = false; // Biến để kiểm tra xem có sản phẩm nào phù hợp không

  // Duyệt qua danh sách sản phẩm và ẩn/hiện sản phẩm phù hợp
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // Lấy tên sản phẩm và giá sản phẩm, và chuyển thành chữ thường
    const productName = product.getElementsByClassName('tensanpham')[0].innerText.toLowerCase();
    const productPrice = product.getElementsByClassName('price')[0].innerText.toLowerCase();

    // Kiểm tra xem tên sản phẩm hoặc giá sản phẩm có chứa từ khóa tìm kiếm không
    if (
      productName.indexOf(searchTerm) === -1 && // Nếu không có từ khóa trong tên sản phẩm
      productPrice.indexOf(searchTerm) === -1   // hoặc không có từ khóa trong giá sản phẩm
    ) {
      product.style.display = 'none'; // Ẩn sản phẩm nếu không phù hợp với từ khóa tìm kiếm
    } else {
      product.style.display = 'block'; // Hiện sản phẩm nếu phù hợp với từ khóa tìm kiếm
      found = true; // Đặt biến found thành true để biết đã tìm thấy ít nhất một sản phẩm phù hợp
    }
  }

  // Hiển thị thông báo khi không tìm thấy kết quả
  if (!found) {
    alert('Không tìm thấy sản phẩm phù hợp.');
  }

  // Cuộn xuống nếu tìm thấy sản phẩm
  if (found) {
    container.scrollIntoView({ behavior: 'smooth' }); // Cuộn xuống container nếu tìm thấy sản phẩm
  }
}


// Xử lý sự kiện khi nhấn vào biểu tượng tìm kiếm
iconSearch.addEventListener('click', handleSearch);

// Xử lý sự kiện khi nhấn phím Enter trong thanh tìm kiếm
searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') { // Kiểm tra xem phím được nhấn có phải là phím Enter không
    handleSearch(); // Gọi hàm handleSearch() để thực hiện tìm kiếm
  }
});



// Lấy tất cả các phần tử sản phẩm trong danh sách sản phẩm
const productElements = document.querySelectorAll(".category");

// Lấy phần tử giỏ hàng
const cartElement = document.querySelector(".giohang");

// Mảng chứa các sản phẩm đã chọn
const selectedProducts = [];

// Biến lưu tổng giá tiền của giỏ hàng
let cartTotalPrice = 0;

// Biến lưu tổng số lượng sản phẩm trong giỏ hàng
let cartTotalQuantity = 0;

// Lặp qua mỗi phần tử sản phẩm và thêm sự kiện cho biểu tượng trái tim
productElements.forEach(function (product) {
  // Lấy biểu tượng trái tim từ sản phẩm
  const heartIcon = product.querySelector(".bi-heart-fill");

  // Lấy tên sản phẩm từ thẻ có lớp là 'tensanpham'
  const productName = product.querySelector(".tensanpham").textContent;

  // Lấy giá sản phẩm từ thẻ có lớp là 'price', loại bỏ ký tự "$" và chuyển đổi thành số
  const productPrice = parseFloat(product.querySelector(".price").textContent.replace("$", ""));

  // Lấy đường dẫn hình ảnh sản phẩm từ thuộc tính 'src' của thẻ hình ảnh
  const productImageSrc = product.querySelector(".image-product").getAttribute("src");

  // Thêm sự kiện click cho biểu tượng trái tim
  heartIcon.addEventListener("click", function () {
    // Tìm sản phẩm đã chọn trong mảng selectedProducts
    const existingProduct = selectedProducts.find(p => p.name === productName);

    // Nếu sản phẩm đã chọn tồn tại, tăng số lượng sản phẩm lên 1
    if (existingProduct) {
      existingProduct.count += 1;
    } 
    // Nếu sản phẩm chưa được chọn, thêm vào mảng selectedProducts với số lượng là 1
    else {
      selectedProducts.push({
        name: productName,
        count: 1,
        price: productPrice,
        image: productImageSrc
      });
    }

    // Gọi hàm renderCartItems() để cập nhật giao diện giỏ hàng
    renderCartItems();

    // Gọi hàm animateProductToCart() để tạo hiệu ứng khi sản phẩm được thêm vào giỏ hàng
    animateProductToCart(product);
  });
});

//chức năng thêm sản phẩm vào giỏ hàng và thanh toán
function renderCartItems() {
  // Xóa nội dung cũ của giỏ hàng
  cartElement.innerHTML = "";
  // Duyệt qua mỗi sản phẩm đã chọn và tạo giao diện hiển thị trong giỏ hàng
  selectedProducts.forEach(productInfo => {
    // Tạo một phần tử div mới cho mỗi sản phẩm
    const newItem = document.createElement("div");
    newItem.classList.add("cart-element");

    // Tạo hình ảnh sản phẩm
    const itemImage = document.createElement("img");
    itemImage.src = productInfo.image;
    itemImage.alt = productInfo.name;
    itemImage.classList.add("img-small");
    newItem.appendChild(itemImage);

    // Tạo tên sản phẩm
    const itemName = document.createElement("div");
    itemName.innerText = productInfo.name;
    newItem.appendChild(itemName);

    // Tạo giá sản phẩm
    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    newItem.appendChild(itemPrice);

    // Tạo nút giảm số lượng sản phẩm
    const decreaseButton = document.createElement("button");
    decreaseButton.innerText = "-";
    decreaseButton.classList.add("quantity-button", "decrease-button");
    // Thêm sự kiện click để giảm số lượng sản phẩm
    decreaseButton.addEventListener("click", () => updateQuantity(productInfo, -1, itemPrice, newItem));
    newItem.appendChild(decreaseButton);

    // Hiển thị số lượng sản phẩm
    const itemQuantity = document.createElement("div");
    itemQuantity.innerText = `X${productInfo.count}`;
    newItem.appendChild(itemQuantity);

    // Tạo nút tăng số lượng sản phẩm
    const increaseButton = document.createElement("button");
    increaseButton.innerText = "+";
    increaseButton.classList.add("quantity-button", "increase-button");
    // Thêm sự kiện click để tăng số lượng sản phẩm
    increaseButton.addEventListener("click", () => updateQuantity(productInfo, 1, itemPrice, newItem));
    newItem.appendChild(increaseButton);

    // Tạo nút xóa sản phẩm khỏi giỏ hàng
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button");
    // Thêm sự kiện click để xóa sản phẩm
    deleteButton.addEventListener("click", () => {
      const index = selectedProducts.indexOf(productInfo);
      if (index !== -1) {
        selectedProducts.splice(index, 1); // Xóa sản phẩm khỏi mảng selectedProducts
        newItem.remove(); // Xóa giao diện sản phẩm khỏi giỏ hàng
        updateCartTotal(); // Cập nhật tổng giá tiền và tổng số lượng sản phẩm trong giỏ hàng
      }
    });
    newItem.appendChild(deleteButton);

    // Thêm phần tử mới vào giỏ hàng
    cartElement.appendChild(newItem);
    // Cập nhật giá của sản phẩm
    updateItemPrice(itemPrice, productInfo);
  });

  // Thêm nút thanh toán nếu có sản phẩm trong giỏ hàng
  if (selectedProducts.length) {
    addCheckoutButton();
  }
}


function updateQuantity(productInfo, change, itemPrice, newItem) {
  // Cập nhật số lượng sản phẩm bằng cách thêm hoặc giảm theo giá trị của biến 'change'
  productInfo.count += change;
  
  // Nếu số lượng sản phẩm bằng 0, loại bỏ sản phẩm khỏi giỏ hàng
  if (productInfo.count === 0) {
    const index = selectedProducts.indexOf(productInfo);
    selectedProducts.splice(index, 1); // Xóa sản phẩm khỏi mảng selectedProducts
    newItem.remove(); // Xóa giao diện sản phẩm khỏi giỏ hàng
  } else {
    // Nếu số lượng sản phẩm khác 0, cập nhật số lượng sản phẩm trên giao diện giỏ hàng
    const itemQuantity = newItem.querySelector("div:nth-child(5)"); // Giả sử div chứa số lượng sản phẩm là con thứ 5 của phần tử newItem
    itemQuantity.innerText = `X${productInfo.count}`;
  }
  
  // Cập nhật giá của sản phẩm sau khi số lượng được cập nhật
  updateItemPrice(itemPrice, productInfo);
  
  // Cập nhật tổng giá tiền và tổng số lượng sản phẩm trong giỏ hàng
  updateCartTotal();
}


// Hàm cập nhật giá của sản phẩm trong giỏ hàng
function updateItemPrice(itemPriceElement, productInfo) {
  // Tính tổng giá tiền của sản phẩm bằng cách nhân giá của sản phẩm với số lượng của sản phẩm
  const totalPrice = productInfo.price * productInfo.count;
  // Cập nhật giá trị của phần tử DOM itemPriceElement với tổng giá tiền tính được
  itemPriceElement.innerText = `$${totalPrice}`;
}

// Hàm cập nhật tổng giá tiền và tổng số lượng sản phẩm trong giỏ hàng
function updateCartTotal() {
  // Tính tổng giá tiền và tổng số lượng sản phẩm trong giỏ hàng dựa trên thông tin trong mảng selectedProducts
  cartTotalPrice = selectedProducts.reduce((total, item) => total + item.price * item.count, 0);
  cartTotalQuantity = selectedProducts.reduce((total, item) => total + item.count, 0);
}

// Hàm thêm nút thanh toán vào giỏ hàng
function addCheckoutButton() {
  // Kiểm tra xem đã có nút thanh toán trong giỏ hàng hay chưa
  const existingCheckoutButton = document.querySelector(".checkout-button");
  if (!existingCheckoutButton) {
    // Nếu chưa có, tạo một nút thanh toán mới
    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("checkout-button");
    checkoutButton.innerText = "Thanh toán";
    // Thêm sự kiện click cho nút thanh toán
    checkoutButton.addEventListener("click", () => {
      // Hiển thị thông báo khi thanh toán thành công
      alert("Cảm ơn bạn đã mua hàng!");
      // Làm sạch giỏ hàng bằng cách xóa tất cả các sản phẩm đã chọn
      selectedProducts.length = 0;
      // Làm sạch giao diện giỏ hàng bằng cách xóa tất cả các phần tử con
      cartElement.innerHTML = "";
      // Cập nhật tổng giá tiền và tổng số lượng sản phẩm trong giỏ hàng
      updateCartTotal();
    });
    // Thêm nút thanh toán vào giỏ hàng
    cartElement.appendChild(checkoutButton);
  }
}


function animateProductToCart(product) {
  // Lấy đường dẫn hình ảnh sản phẩm
  const productImageSrc = product.querySelector(".image-product").src;

  // Tạo một bản sao của hình ảnh sản phẩm
  const productImageClone = product.querySelector(".image-product").cloneNode(true);
  // Thêm lớp 'product-clone' vào bản sao hình ảnh
  productImageClone.classList.add("product-clone");
  // Đặt vị trí và kích thước của bản sao hình ảnh sao cho nó trùng với sản phẩm gốc
  productImageClone.style.left = product.getBoundingClientRect().left + "px";
  productImageClone.style.top = product.getBoundingClientRect().top + "px";
  productImageClone.style.width = product.getBoundingClientRect().width + "px";
  productImageClone.style.height = product.getBoundingClientRect().height + "px";
  // Thêm bản sao hình ảnh vào body của trang web
  document.body.appendChild(productImageClone);

  setTimeout(function () {
    // Lấy phần tử cửa hàng
    const shopElement = document.querySelector("#shop");
    // Lấy kích thước của cửa hàng
    const shopRect = shopElement.getBoundingClientRect();

    // Tính toán khoảng cách và tỷ lệ thu nhỏ cần thiết để sản phẩm di chuyển đến giỏ hàng
    const offsetX = shopRect.left - product.getBoundingClientRect().left - 60;
    const offsetY = shopRect.top - product.getBoundingClientRect().top - 100;
    const scaleX = shopRect.width / product.getBoundingClientRect().width;
    const scaleY = shopRect.height / product.getBoundingClientRect().height;
    const scaleRatio = 0.2;

    const targetScaleX = scaleX * scaleRatio;
    const targetScaleY = scaleY * scaleRatio;

    // Áp dụng hiệu ứng chuyển động và thu nhỏ cho bản sao hình ảnh để di chuyển đến giỏ hàng
    productImageClone.style.transition = "transform 700ms ease-in-out, opacity 700ms ease-in-out";
    productImageClone.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${targetScaleX}, ${targetScaleY})`;
    productImageClone.style.opacity = 0;

    // Sau khi hiệu ứng hoàn thành, loại bỏ bản sao hình ảnh khỏi trang web
    setTimeout(function () {
      productImageClone.remove();
    }, 700);
  }, 0);
}

//hiệu ứng click thanh toán
function addCheckoutButton() {
  // Kiểm tra xem nút thanh toán đã tồn tại trong giao diện hay chưa
  const existingCheckoutButton = document.querySelector(".checkout-button");
  if (!existingCheckoutButton) {
    // Nếu chưa có, tạo một nút thanh toán mới
    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("checkout-button");
    checkoutButton.innerText = "Thanh toán";

    // Cấu hình kiểu dáng cơ bản cho nút thanh toán
    checkoutButton.style.backgroundColor = "red"; // Màu nền đỏ
    checkoutButton.style.color = "white"; // Màu chữ trắng
    checkoutButton.style.border = "none"; // Không có đường viền
    checkoutButton.style.padding = "10px 20px"; // Khoảng cách lề
    checkoutButton.style.cursor = "pointer"; // Con trỏ chuột hình bàn tay

    // Hiệu ứng khi rê chuột qua nút thanh toán
    checkoutButton.onmouseover = function() {
      this.style.backgroundColor = "#ff3333"; // Màu đỏ nhạt khi rê chuột qua
    };
    checkoutButton.onmouseout = function() {
      this.style.backgroundColor = "red"; // Trở lại màu đỏ ban đầu khi không rê chuột qua
    };

    // Hiệu ứng khi click vào nút thanh toán
    checkoutButton.onmousedown = function() {
      this.style.backgroundColor = "#cc0000"; // Màu đỏ đậm khi click
      this.style.transform = "translateY(2px)"; // Hiệu ứng nhấn xuống nhẹ
    };
    checkoutButton.onmouseup = function() {
      this.style.backgroundColor = "#ff3333"; // Trở lại màu đỏ nhạt khi thả chuột
      this.style.transform = "translateY(-2px)"; // Trở về vị trí ban đầu
    };

    // Thêm sự kiện click vào nút thanh toán
    checkoutButton.addEventListener("click", () => {
      // Hiển thị thông báo khi thanh toán thành công
      alert("Cảm ơn bạn đã mua hàng!");
      // Xóa tất cả các sản phẩm trong giỏ hàng
      selectedProducts.length = 0;
      // Làm sạch giao diện giỏ hàng
      cartElement.innerHTML = "";
      // Cập nhật tổng giá tiền và tổng số lượng sản phẩm trong giỏ hàng
      updateCartTotal();
    });

    // Thêm nút thanh toán vào giao diện giỏ hàng
    cartElement.appendChild(checkoutButton);
  }
}


// Hàm gửi tin nhắn
function sendmesss() {
  // Lấy các giá trị từ các trường nhập liệu
  var email = document.getElementById('floatingInput').value;
  var lastName = document.getElementById('floatingPassword').value;
  var comment = document.getElementById('floatingTextarea2').value;

  // Validate định dạng email sử dụng một cảnh báo
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Vui lòng nhập địa chỉ email hợp lệ.');
      return; // Dừng hàm nếu email không hợp lệ
  }

  // Tạo đối tượng formData để chứa dữ liệu
  var formData = {
      email: email,
      lastName: lastName, // Cân nhắc đổi tên ID nếu không phải là mật khẩu
      message: comment
  };

  // Gửi yêu cầu POST đến API
  fetch('https://663ce9ee17145c4d8c3828e4.mockapi.io/concartus', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.status);
      }
      return response.json();
  })
  .then(data => {
      console.log(data);
      // Thông báo "Cảm ơn" khi tin nhắn được gửi thành công cùng với dữ liệu đã nhập
      alert("Phản hồi đã được gửi!!\nEmail: " + email + "\nTên: " + lastName + "\nTin nhắn: " + comment);
      // Xóa các trường nhập liệu sau khi gửi thành công
      document.getElementById('floatingInput').value = '';
      document.getElementById('floatingPassword').value = '';
      document.getElementById('floatingTextarea2').value = '';
  })
  .catch(error => {
      alert('Không gửi được tin nhắn: ' + error.message); // Sử dụng một cảnh báo cho các thông báo lỗi
      console.error('Error:', error);
  });
}

