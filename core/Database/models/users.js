// const getUsers = async <T>(table: string): Promise<T[]> => {
//   try {
//     const { data, error } = await supabase.from(table).select("*");
//     if (error) {
//       throw error;
//     }
//     return data || [];
//   } catch (error) {
//     console.error("Erreur lors de la récupération des données :", error);
//     return [];
//   }
// };

// const createData = async <T>(table: string, data: T) => {
//   try {
//     const { error } = await supabase.from(table).insert([data]);
//     if (error) {
//       throw error;
//     }
//     return true;
//   } catch (error) {
//     console.error("Erreur lors de l'insertion des données :", error);
//     return false;
//   }
// };

// const updateData = async <T>(table: string, data: T, id: number) => {
//   try {
//     const { error } = await supabase.from(table).update(data).eq("id", id);
//     if (error) {
//       throw error;
//     }
//     return true;
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour des données :", error);
//     return false;
//   }
// };

// const deleteData = async <T>(table: string, id: number) => {
//   try {
//     const { error } = await supabase.from(table).delete().eq("id", id);
//     if (error) {
//       throw error;
//     }
//     return true;
//   } catch (error) {
//     console.error("Erreur lors de la suppression des données :", error);
//     return false;
//   }
// };

// export { getData, createData, updateData, deleteData };
