// place files you want to import through the `$lib` alias in this folder.
import it_wont_be_long from '$lib/asset/it wont be long.png';
import not_yours from '$lib/asset/not yours.png';
import you_left_me_again from '$lib/asset/you left me again.png';
import biar_kuantar_kau_pulang from '$lib/asset/biar kuantar kau pulang.png';
import utarakan from '$lib/asset/utarakan.png';
import it_took_me_two_years from '$lib/asset/it took me two years.png';

let thumbnail_lirik = {
    'it wont be long.png': it_wont_be_long,
    'not yours.png': not_yours,
    'you left me again.png': you_left_me_again,
    'biar kuantar kau pulang.png': biar_kuantar_kau_pulang,
    'utarakan.png': utarakan,
    'it took me two years.png': it_took_me_two_years
};

export const thumbnail_map = new Map<string, string>(Object.entries(thumbnail_lirik));

export default thumbnail_map;
