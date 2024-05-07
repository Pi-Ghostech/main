package tn.esprit.pi.Services;

import tn.esprit.pi.Entities.Club;
import tn.esprit.pi.Entities.Event;

import java.util.List;

public interface IClubService {

    Club addClub(Club club );
    List<Club> getAllClub();
    Club getClubById(long id);
    Club updateClub(Club club);
    void deleteClub(long id);
    Club affecterclubtoevent(Long id_c,Long id);


    List<Club> getClubsByName(String nom);
    List<Club> getClubsByDescription(String description);
    List<Club> getAllClubsSortedByNom();
     List<Event> getAllCommentsForError(long errorId);


}
