let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không day Logitech", price: 45, category: "Phu kien", inStock: true },
{ id: "P03", name: "Ban phím cơ Keychron", price: 95, category: "Phụ kien", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phy kiện", inStock: true }

];
function findProductById(idToFind) {
    return products.find(product => product.id === idToFind);
}
let inputId = prompt("Nhập Id sản phẩm bạn tìm kiếm:");
let result = findProductById(inputId);
if (result) {
    console.log(`Tìm thấy: ${result.name} - Giá: $${result.price}`);
} else {
    console.log("Không tìm thấy sản phẩm với ID này.");
}