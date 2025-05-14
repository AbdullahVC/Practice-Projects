/* enum UserRole {
 Müderris,
 Talebe,
 Admin,
}

let userRole: UserRole = UserRole.Müderris; */


let userRole: 'Müderris' | 'Talebe' | 'Admin' = 'Müderris';

userRole = 'Talebe';

type role = 'Müderris' | 'Talebe' | 'Admin';

let userRole2: role = 'Müderris';

userRole2 = 'Talebe';








