import {numberDischarges} from "utils/numberDischarges";

export const getFlatItem = function(i) {
  return {
    id: i.id || i._id,
    photoFirst: i.house.foto.value[0],
    photo: i.house.foto.value.filter((i, idx) => idx > 0 && idx < 4),
    photoMore: i.house.foto.value.length > 4 ? i.house.foto.value.length - 4 : 0,
    cost: numberDischarges(i.terms_of_sale.cost.value),
    costM: numberDischarges(Math.round(i.terms_of_sale.cost.value / i.flat.square)),
    rooms: i.flat.rooms,
    floor: i.flat.floor,
    floorTotal: i.flat.floors_in_the_house,
    owners: i.deal.number_of_owners.value,
    city: i.address.city,
    streetName: i.address.streetName,
  }
};