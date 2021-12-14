select p.*, c.name(company_name) from products p join companies c on p.id = c.id
