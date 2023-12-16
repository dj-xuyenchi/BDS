export const checkRole = (listRole, role) => {
    for (var item of listRole) {
        for (var item2 of role) {
            if (item.role.roleCode === item2) {
                return true
            }
        }
    }
    return false
}