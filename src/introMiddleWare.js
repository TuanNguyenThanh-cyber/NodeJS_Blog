/**
 * MiddleWare
 *
 * ### Ý nghĩa
 * - Phần mềm trung gian (đứng giữa các thành phần trong mô hình phần mềm)
 *
 * Browser (client) ========Request========> Server (Node)
 * Browser (client) <=======Response======== Server (Node)
 *
 * ### Vai trò
 * Giống như "Bác bảo vệ"
 *
 * 1. Kiểm soát (Validation)
 * 2. Cho phép vào (Pass validation)
 * 3. Không cho vào
 * 4. Chỉnh sửa / Thay đổi
 *
 * ### Chức năng
 * - Dựng chức năng xác thực (Authentication)
 * - Chức năng phân quyền (Authorization)
 * - Để chia sẽ các giá trị của biến tới tất cả các views (BE)
 */
