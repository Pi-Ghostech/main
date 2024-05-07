package tn.esprit.pi.Services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.pi.Entities.Club;
import tn.esprit.pi.Entities.Event;
import tn.esprit.pi.Repository.ClubRepo;
import tn.esprit.pi.Repository.EventRepo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor


public class ClubSrevice implements IClubService {
    @Autowired
    ClubRepo clubRepo ;
    EventRepo eventRepo ;
    @Override
    public Club addClub(Club club ) {
        return clubRepo.save(club);
    }

    @Override
    public List<Club> getAllClub() {
        return clubRepo.findAll();
    }

    @Override
    public Club getClubById(long id) {
        return clubRepo.findById(id).get();
    }

    @Override
    public Club updateClub(Club club) {
        return clubRepo.save(club) ;
    }

    @Override
    public void deleteClub(long id) {
        clubRepo.deleteById(id);

    }

    @Override
    public Club affecterclubtoevent(Long id_c, Long id_e) {

        Event event =eventRepo.findById(id_e).get();
        Club club = clubRepo.findById(id_c).get();

        club.getEvents().add(event) ;
        clubRepo.save(club);


        return club;
    }
    // Dans le service ClubService
    @Override
    public List<Club> getClubsByName(String nom) {
        return clubRepo.findByNomContaining(nom);
    }

    @Override
    public List<Club> getClubsByDescription(String description) {
        return clubRepo.findByDescriptionContaining(description);
    }
    public List<Club> getAllClubsSortedByNom() {
        return clubRepo.findAll(Sort.by(Sort.Direction.ASC, "nom"));
    }

    @Override
    @Transactional(readOnly = true)
    public List<Event> getAllCommentsForError(long errorId) {
        Club club = clubRepo.findById(errorId)
                .orElse(null);

        if (club != null) {
            List<Event> EventsList = new ArrayList<>(club.getEvents());
            return EventsList;
        } else {
            return Collections.emptyList();
        }
    }
}
