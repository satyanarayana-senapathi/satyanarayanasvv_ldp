function addEventListener(type, selector, callback) {addEventListener
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    });
}
function addMenuCardList() {
    localStorage.setItem("menuCardList", JSON.stringify(MenuCardList));
}
function getMenuCardList() {
    return JSON.parse(localStorage.getItem("menuCardList")) || [];
}

// Adding table items
let tableCardList = [
    {
        id: 0,
        tableNumber: 1,
        tableStatus: "open",
        tableTotal: 0,
        totalItems: 0,
        tableItems: [],
    },
    {
        id: 1,
        tableNumber: 2,
        tableStatus: "open",
        tableTotal: 0,
        totalItems: 0,
        tableItems: [],
    },
    {
        id: 2,
        tableNumber: 3,
        tableStatus: "open",
        tableTotal: 0,
        totalItems: 0,
        tableItems: [],
    },
];

// adding menu-items
let MenuCardList = [
    {
        id: 0,
        name: "pasta",
        cost: 100,
        type:"entree",
    },
    {
        id: 1,
        name: "pizza",
        cost: 30,
        type:"entree",
    },
    {
        id: 2,
        name: "butter chicken",
        cost: 50,
        type:"main course",
    },
    {
        id: 3,
        name: "mutton biryani",
        cost: 100,
        type:"main course",
    },
    {
        id: 4,
        name: "chiken biryani",
        cost: 30,
        type: "desserts",
    },
    {
        id: 5,
        name: "mutton biryani",
        cost: 50,
        type: "desserts",
    },
    {
        id: 6,
        name: "fried rice",
        cost: 100,
        type:"appetizers",
    },
    {
        id: 7,
        name: "noodles",
        cost: 30,
        type:"appetizers",
    },
    {
        id: 8,
        name: "fish",
        cost: 50,
        type: "beverages",
    },
    {
        id: 9,
        name: "starter",
        cost: 60,
        type: "beverages",
    },
    {
        id: 10,
        name: "prawn",
        cost: 30,
        type: "beverages",
    },
    {
        id: 11,
        name: "drink",
        cost: 50,
        type:"desserts",
    },
];

addMenuCardList();

const tableCards = document.querySelector(".table-cards");
const menuCards = document.querySelector(".menu-cards");

// display tables
tableCardList.forEach((tableCard) => {
    const tableCardHtml = `
    <div class="table-card drop" attr-key=${tableCard.id}>
    <h2 class="table-card-title drop" attr-key=${tableCard.id}>Table ${tableCard.id + 1
        }</h2>
    <p class="table-card-para drop" attr-key=${tableCard.id
        }>Total cost: <span id="total-cost" attr-key=${tableCard.id}>${tableCard.tableTotal
        }</span></p>
</div>
    `;
    tableCards.insertAdjacentHTML("beforeend", tableCardHtml);
});

//display menu
MenuCardList.forEach((menuCard) => {
    const menuCardHtml = `
    <div class="menu-card" draggable="true" attr-key=${menuCard.id}>
                            <button class="delete delete-btn" attr-key=${menuCard.id}>
                            <img src="./assests/delete.svg" alt="edit-button" class="delete-img delete-btn" attr-key=${menuCard.id}>
                            <span class="show-delete" attr-key=${menuCard.id}>delete</span>
                            </button>
                            <h2 attr-key=${menuCard.id}>${menuCard.name}</h2>
                            <p attr-key=${menuCard.id}>Item cost: <span id="total-cost" attr-key=${menuCard.id}>${menuCard.cost}</span></p>
                            <p attr-key=${menuCard.id}>Item type: <span id="item-type" attr-key=${menuCard.id}>${menuCard.type}</span></p>
                            
                        </div>
    `;
    menuCards.insertAdjacentHTML("beforeend", menuCardHtml);
});

// search filter for table
const tableSearch = document.querySelector("#table-search");
tableSearch.addEventListener("keyup", (e) => {
    const tableCards = document.querySelectorAll(".table-card");
    tableCards.forEach((card) => {
        const cardName = card.children[0].innerText;
        console.log(cardName);
        if (cardName.toLowerCase().includes(e.target.value.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

//search filter for menu items
const menuSearch = document.querySelector("#menu-search");
menuSearch.addEventListener("keyup", (e) => {
    const menuCards = document.querySelectorAll(".menu-card");
    menuCards.forEach((card) => {
        // console.log(card.children[2].innerText);
        const cardName = card.children[1].innerText;
        const typeName=card.children[3].children[0].innerHTML;
        //console.log(card.children[3].children[0].innerHTML);
        if (cardName.toLowerCase().includes(e.target.value.toLowerCase()) || typeName.toLowerCase().includes(e.target.value.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// taking new elements to the menuList
const addmenu = document.querySelector(".create-menu-item");
addmenu.addEventListener("click", () => {
    const dialog = document.querySelector(".add-menu-dialog");
    dialog.innerHTML = `
    <form>
        <h2>Add Menu Item</h2>
        <br>
        <label for="item-name">Item Name</label>
        <input required type="text" name="item-name" id="item-name" placeholder="Item Name">
        <br>
        <label for="item-price">Item Price</label>
        <input required type="number" name="item-price" id="item-price" placeholder="Item Price" min="1">
        <br>
        <label for="item-type">Item Type</label>
        <select name="item-type" id="item-typee" required>
            <option value="">--select item type--</option>
            <option value="entree">entree</option>
            <option value="mainCourse">main course</option>
            <option value="desserts">desserts</option>
            <option value="appetizers">appetizers</option>
            <option value="beverages">beverages</option>
        </select>
        <br>
        <br>
        <button class="add-menu-item" type="submit">Add</button>
        <button class="cancel">Cancel</button>
    </form>
    `;
// pushing items to menu list
    const addMenuItem = dialog.querySelector(".add-menu-item");
    const cancelBtn = dialog.querySelector(".cancel");

    addMenuItem.addEventListener("click", (e) => {
        e.preventDefault();
        const itemName = dialog.querySelector("#item-name").value;
        const itemPrice = dialog.querySelector("#item-price").value;
        const itemType = dialog.querySelector("#item-typee").value;

        const newMenuItem = {
            id: MenuCardList.length,
            name: itemName,
            cost: parseInt(itemPrice),
            type: itemType,
        };
        MenuCardList.push(newMenuItem);
        const menuCardHtml = `
        <div class="menu-card" draggable="true" attr-key=${MenuCardList.length - 1}>
            <button class="delete" attr-key=${MenuCardList.length - 1}>
            <img src="./assests/delete.svg" alt="edit-button" class="delete-img delete-btn" attr-key=${MenuCardList.length - 1}>
            <span class="show-delete" attr-key=${MenuCardList.length - 1}>delete</span>
            </button>
            <h2 attr-key=${MenuCardList.length - 1}>${newMenuItem.name}</h2>
            <p attr-key=${MenuCardList.length - 1}>Total cost: <span id="total-cost" attr-key=${MenuCardList.length - 1}>${newMenuItem.cost}</span></p>
            <p attr-key=${MenuCardList.length - 1}>Item type: <span id="item-type" attr-key=${MenuCardList.length - 1}>${newMenuItem.type}</span></p>
                            
        </div>
        `;
        menuCards.insertAdjacentHTML("beforeend", menuCardHtml);
        addMenuCardList();
        dialog.close();
    });

    dialog.showModal();

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close();
    });
});

// remove unwanted menu items in the list
addEventListener("click", ".delete-btn", (e) => {
    e.target.parentElement.parentElement.remove();
});


// drag and drop
addEventListener("dragstart", ".menu-card", (e) => {
    e.dataTransfer.setData("text/plain", e.target.getAttribute("attr-key"));
});

addEventListener("dragover", ".drop", (e) => {
    e.preventDefault();
});

addEventListener("drop", ".drop", (e) => {
    e.preventDefault();
    const key = e.dataTransfer.getData("text/plain");
    const tablekey = e.target.getAttribute("attr-key");
    const menuObj = MenuCardList[key];

    if (
        tableCardList[tablekey].tableItems.find(
            (item) => item.name == menuObj.name
        ) === undefined
    ) {
        tableCardList[tablekey].tableItems.push({
            name: menuObj.name,
            cost: menuObj.cost,
            individualCost: menuObj.cost,
        });
    } else {
        tableCardList[tablekey].tableItems.forEach((item) => {
            if (item.name == menuObj.name) {
                item.cost += menuObj.cost;
            }
        });
    }

    const totalcost = document.querySelector(
        `#total-cost[attr-key="${tablekey}"]`
    );
    totalcost.innerText = parseInt(totalcost.innerText) + menuObj.cost;
});

addEventListener("click", ".drop", (e) => {
    const dialog = document.querySelector(".show-table-data");
    const tablekey = e.target.getAttribute("attr-key");
    const tablearr = tableCardList[tablekey];
    const tablecardcolor = document.querySelector(`.table-card[attr-key="${tablekey}"]`);


    if (tablearr.tableItems.length == 0) {
        alert("No items in the table");
        return;
    }

    tablecardcolor.style.backgroundColor = "yellow";
    dialog.innerHTML =
        `
        <div class="bill-heading">
            <h1 class="bill-heading-text">

                Table - 1 | Order details
            </h1>
            <img src="./assests/close.svg" alt="close-icon" class="cancel">
        </div>
        <div class="table-data-container">
        <div class="table-data" attr-table-key="${tablekey}">
                <div class="sno bold">sno</div>
                <p class="bold"> name</p>
                <p class="bold">quantity</p>
                <p id="cost-display" class="bold"> cost</p>
                <!-- <button class="update-item" attr-table-key="${tablekey}">update</button>
                <button class="delete-item">delete</button> -->
                <br>
            </div>
                </div>
                <div class="generate-bill-btn-container">

            <button class="genrate-bill bold">
                Generate bill...!
            </button>
        </div>
    `
        ;
    let cnt = 1;
    tablearr.tableItems.forEach((item) => {
        const quantity = Math.floor(item.cost / item.individualCost);
        const showTableHtml = `
        <div class="table-data" attr-table-key="${tablekey}">
                <div class="sno">${cnt++}</div>
                <p id="item-name">${item.name}</p>
                <label for="quantity">
                    <input type="number" value="${quantity}" id="input-quantity" min="1">
                </label>
                <p id="cost-display"> ${item.cost}</p>
                <button class="update-item" attr-table-key="${tablekey}">update</button>
                <img class="delete-item" src="./assests/delete.svg" alt="delete-icon">
                <br>
            </div>
    `;
        const container = document.querySelector(".table-data-container");
        container.insertAdjacentHTML('beforeend', showTableHtml);
    });
    const tableHead = document.querySelector(".bill-heading-text");
    tableHead.innerText = `Table - ${parseInt(tablekey) + 1} | Order details`;
    dialog.showModal();
    const cancelBtn = dialog.querySelector(".cancel");
    cancelBtn.addEventListener("click", (e) => {
        tablecardcolor.style.backgroundColor = "white"
        e.preventDefault();
        dialog.close();
    });
    const generateBill = dialog.querySelector(".genrate-bill");
    generateBill.addEventListener("click", (e) => {
        e.preventDefault();
        tablecardcolor.style.backgroundColor = "skyblue";
        console.log(e.target.parentElement);
        e.target.parentElement.parentElement.close();
        const dialog = document.querySelector(".show-bill");
        const billarr = tablearr.tableItems;
        dialog.innerHTML = ``;
        console.log(billarr);
        billarr.forEach((item) => {
            const billHtml = `
            <div class="bill-data">

                <h3 >${item.name}</h3>
                <p>cost ${item.cost}</p>
                <br>
        </div>
        `;
        dialog.insertAdjacentHTML("afterbegin", billHtml);
        });
        const totalcost = document.querySelector(
            `#total-cost[attr-key="${tablekey}"]`
        );
        const totalcostHtml = `
        <div class="bill-data">

            <h3>Total Cost</h3>
            <p>cost ${totalcost.innerText}</p>
            <br>
    </div>
    `;
        dialog.insertAdjacentHTML("afterbegin", totalcostHtml);
        dialog.insertAdjacentHTML(
            "beforeend",
            `<button class="cancel">close</button>`
        );

        const cancelBtn = dialog.querySelector(".cancel");
        cancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(tablekey);
            dialog.close();
            tablearr.tableItems = [];
            totalcost.innerText = "0";
        });

        dialog.showModal();
    });
});

//items updation in the tables
addEventListener("click", ".update-item", (e) => {
    e.preventDefault();
    const inputQuantity =
        e.target.parentElement.querySelector("#input-quantity").value;
    const tablekey = e.target.getAttribute("attr-table-key");
    const tablearr = tableCardList[tablekey];
    const costDisplay = e.target.parentElement.querySelector("#cost-display");
    console.log(e.target.parentElement);
    const itemName = e.target.parentElement.querySelector("#item-name").innerText;

    const newCost =
        parseInt(inputQuantity) *
        tablearr.tableItems.find((item) => item.name == itemName).individualCost;
    costDisplay.innerText = `${newCost}`;
    const totalcost = document.querySelector(
        `#total-cost[attr-key="${tablekey}"]`
    );
    tablearr.tableItems.forEach((item) => {
        if (item.name == itemName) {
            item.cost = newCost;
        }
    });
    let total = 0;
    console.log(tableCardList);
    tableCardList[tablekey].tableItems.forEach((item) => {
        total += item.cost;
    });

    totalcost.innerText = total;
});

//item deletion in tables
addEventListener("click", ".delete-item", (e) => {
    e.preventDefault();
    const tablekey = e.target.parentElement.getAttribute("attr-table-key");
    const tablearr = tableCardList[tablekey];
    const itemName = e.target.parentElement.querySelector("#item-name").innerText;
    const cost = tablearr.tableItems.find((item) => item.name == itemName).cost;
    tablearr.tableItems = tablearr.tableItems.filter(
        (item) => item.name != itemName
    );
    e.target.parentElement.remove();
    const totalcost = document.querySelector(
        `#total-cost[attr-key="${tablekey}"]`
    );
    totalcost.innerText =
        parseInt(totalcost.innerText) - cost > 0
            ? parseInt(totalcost.innerText) - cost
            : 0;
});

