select * from travelers where country <> 'Mexico' and country <> 'USA' and country <> 'Canada'



select * from travelers where country not in ('USA', 'Mexico', 'Canada')
