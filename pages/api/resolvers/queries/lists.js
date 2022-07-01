import { supabase } from 'utils/supabaseClient';

const lists = async (_parent, _args, context) => {
  try {
    const { data, error } = await supabase.from('lists').select();

    if (!data || error) {
      return null;
    }

    return data;
  } catch (error) {
    return null;
  }
};

export default lists;
