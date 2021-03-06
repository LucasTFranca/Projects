db.trips.aggregate([
  {
    $group: {
      _id: {
        dia: { $dayOfWeek: "$startTime" },
        nome: "$startStationName",
      },
      total: { $sum: 1 },
    },
  },
  {
    $match: {
      "_id.dia": 5,
    },
  },
  { $sort: { total: -1 } },
  { $limit: 1 },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id.nome",
      total: "$total",
    },
  },
]);
