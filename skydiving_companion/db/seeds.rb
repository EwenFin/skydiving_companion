User.destroy_all
Jump.destroy_all

u1 = User.create({email: "ewencarr@hotmail.com", password: "password", password_confirmation: "password"})

u1.jumps.create(number: 1, date: '2007-07-12 10:00:00', location: 'St Andrews', altitude: 3500, gear:'arrow', description:"static line")



