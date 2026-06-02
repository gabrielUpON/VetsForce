import { supabase } from "../config/supabase"

export async function getClientes() {
    const {data, error} = await supabase.from("clientes").select("*");

    if (error) {
        console.log("Error fetching: ", error);
    } else { 
        return data;
    }
}