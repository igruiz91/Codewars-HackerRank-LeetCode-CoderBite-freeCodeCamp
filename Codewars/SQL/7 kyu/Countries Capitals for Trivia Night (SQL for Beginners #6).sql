select capital from countries
where country like 'E%'
and continent in ('Africa', 'Afrika')
order by capital limit 3;
