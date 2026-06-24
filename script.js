const btnSubmit = document.querySelector(".btn-submit");
const emailInput = document.getElementById("email");
const errorEmail = document.querySelector(".error-email");
const infoDiv = document.querySelector(".inf");
const submitEmailDiv = document.querySelector(".submit-email");

// Định nghĩa hàm kiểm tra email từ regex
function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Thẻ thể hiện email lỗi
  return regex.test(String(email).toLowerCase());
}

btnSubmit.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();

  // Kiểm tra xem ô nhập có bị trống không
  if (emailValue === "") {
    errorEmail.textContent = "Vui lòng nhập email của bạn!";
    errorEmail.style.color = "red";
    return;
  }

  // Kiểm tra định dạng email có hợp lệ không
  if (validateEmail(emailValue)) {
    // Nếu email đúng:
    errorEmail.textContent = ""; // Xóa thông báo lỗi cũ (nếu có)

    // Thực hiện ẩn/hiện class theo yêu cầu:
    infoDiv.classList.remove("hidden"); // Hiện phần thông tin cá nhân
    submitEmailDiv.classList.add("hidden"); // Ẩn form nhập email
  } else {
    // Nếu email sai định dạng:
    errorEmail.textContent = "Định dạng email không hợp lệ. Vui lòng nhập lại!";
    errorEmail.style.color = "red";
  }
});

// Chọn tất cả các nút View More trên trang
const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const parentBlock = button.parentElement;
    const content = parentBlock.querySelector(".job-content");

    // Kiểm tra xem nội dung hiện tại đang ẩn hay hiện để xử lý thích hợp
    if (content.classList.contains("hidden")) {
      // Nếu đang ẩn: Hiển thị nội dung ra và đổi chữ nút thành View Less
      content.classList.remove("hidden");
      button.textContent = "View Less";
    } else {
      // Nếu đang hiện: Ẩn nội dung đi và đổi chữ nút về View More
      content.classList.add("hidden");
      button.textContent = "View More";
    }
  });
});
