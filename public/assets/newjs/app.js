const profileUser = document.querySelector("#profileUser");
const acctOption = document.querySelector("#account_options");
var showMobileSideBar = false;
profileUser.addEventListener("click", function () {
  if (!acctOption.classList.contains("show_items")) {
    acctOption.classList.add("show_items");
    document.querySelector("#options_list_container").style.display = "block";
  } else {
    acctOption.classList.remove("show_items");
    document.querySelector("#options_list_container").style.display = "none";
  }
});

function toggleOptions(id) {
  const item = document.querySelector("#" + id);
  if (item.classList.contains("d-none")) {
    item.classList.remove("d-none");
    item.classList.add("d-flex");
  } else {
    item.classList.remove("d-flex");
    item.classList.add("d-none");
  }
}

$("#close_icon_container").on("click", function () {
  $("#custom_modal_container").hide();
});

function createEventModal() {
  $("#custom_modal_container").show();
}

// show and hide the sidebar in mobile view
function showSidebar() {
  if (showMobileSideBar) {
    $(".custom_sidebar").addClass("hide-sidebar");
  } else {
    $(".custom_sidebar").removeClass("hide-sidebar");
  }
  showMobileSideBar = !showMobileSideBar;
}

//  showSidebar function ends ....

const imageContainer = document.querySelector("#selectImage");
imageContainer.addEventListener("change", function (e) {
  const imageContainer = document.querySelector("#imageToShow");
  const defaultImgContainer = document.querySelector("#defaultImgContainer");
  if (defaultImgContainer.classList.contains("d-flex")) {
    defaultImgContainer.classList.remove("d-flex");
    defaultImgContainer.classList.add("d-none");
    imageContainer.classList.remove("d-none");
  }
  const reader = new FileReader();
  reader.onload = function (e) {
    imageContainer.setAttribute("src", e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
});

function removeItem(id) {
  alert(id);
}

//Append event condition
const addEventCondition = document.querySelector("#addEventCondition");
addEventCondition.addEventListener("click", function () {
  let eventConditionsArr = [];
  let eventConditionValue = document.querySelector("#eventCondition").value;
  let eventConditionsList = document.querySelector("#eventConditionsList");
  eventConditionsArr.push(eventConditionValue);
  eventConditionValue = "";
  eventConditionsArr.map((val, index) => {
    eventConditionsList.insertAdjacentHTML(
      "beforebegin",
      `
            <div class="d-flex selected_event_condition px-2 mb-3 justify-content-between align-items-center">
                <span class="">${val}</span>
                <button class="dbtn remove_condition_btn" onclick="removeItem('${
                  index + "-" + val
                }')">
                    <i class="bi bi-x"></i>
                </button>
            </div>
          `
    );
  });
});

//Select privacy
$("#privatePrivacy").on("click", function () {
  $("#publicPrivacy").removeClass("selected_privacy");
  $(this).addClass("selected_privacy");
});
$("#publicPrivacy").on("click", function () {
  $("#privatePrivacy").removeClass("selected_privacy");
  $(this).addClass("selected_privacy");
});

//Select profile tab
$(".tab_header_container li").on("click", function () {
  $(".tab_header_container li").removeClass("active_tab");
  $(this).addClass("active_tab");
  const container = $(this).attr("data-item");
  $(".tab_items").removeClass("d-block").addClass("d-none");
  $(`#${container}`).removeClass("d-none").addClass("d-block");
});

// let updatePhotoContainer = document.querySelector('#uploadImage');
$("#uploadImage").on("change", function () {
  // const updateImageShow = document.querySelector('#updateImageShow');
  const reader = new FileReader();
  reader.onload = function (e) {
    $("#updateImageShow").setAttribute("src", e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
});

$("#commenticon").on("click", function () {
  $(this).attr("src", "/assets/newimages/commentactive.svg");
  $("#eventDetailsHolder").removeClass("d-flex").addClass("d-none");
  $("#commentsHolder").removeClass("d-none").addClass("d-flex");
});

$("#snapdetails_option").on("click", function () {
  const srcArr = $(this).attr("src").split("/");
  if (srcArr[srcArr.length - 1] === "opensnapoption.svg") {
    $(this).attr("src", "/assets/newimages/optionicon.svg");
  } else {
    $(this).attr("src", "/assets/newimages/opensnapoption.svg");
  }
});
