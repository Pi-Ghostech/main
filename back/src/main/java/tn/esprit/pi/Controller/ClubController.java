package tn.esprit.pi.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.pi.Entities.Club;
import tn.esprit.pi.Entities.Event;
import tn.esprit.pi.Services.EventService;
import tn.esprit.pi.Services.IClubService;
import tn.esprit.pi.Services.IEventService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Club")
@CrossOrigin("*")

public class ClubController {

    IClubService iClubService ;
    IEventService iEventService ; 

    @GetMapping("/getallClub")
    public List<Club> get_all_Club(){
        List<Club> list=iClubService.getAllClub();
        return list;
    }
    @PostMapping("/addclub")
    public Club add_event(@RequestBody Club c){
        Club club =iClubService.addClub(c);
        return club;
    }

    @GetMapping("/getClub/{id}")
    public Club get_Club_by_id(@PathVariable("id") Long id){
        Club club =iClubService.getClubById(id);
        return club;

    }

    @DeleteMapping("/delete/{id}")
    public void deleteClub(@PathVariable("id")Long id){
        iClubService.deleteClub(id);
    }

    /*@PutMapping("/modifierClub")
    public Club updateClub(@RequestBody Club c){
        Club club = iClubService.updateClub(c);
        return club ;
    }*/
    /*@PutMapping("/modifierClub/{id}")
    public Club updateClub(@PathVariable("id") Long id, @RequestBody Club c){
        Club existingClub = iClubService.getClubById(id);
        if (existingClub != null) {
            c.setId(id); // Assure que l'ID du club reste le même
            return iClubService.updateClub(c);
        } else {
            // Gérer le cas où le club n'est pas trouvé
            return null;
        }
    }*/

    /*@PutMapping("/{id}")
    public ResponseEntity<Club> updateClub(@PathVariable Long id, @RequestBody Club updatedClub) {
        Club existingClub = iClubService.getClubById(id);

        if (existingClub == null) {
            return ResponseEntity.notFound().build();
        }

        existingClub.setNom(updatedClub.getNom());
        existingClub.setDescription(updatedClub.getDescription());

        Club updatedClubEntity = iClubService.updateClub(existingClub);
        return ResponseEntity.ok(updatedClubEntity);
    }*/
    @PutMapping("/{id}")
    public ResponseEntity<Club> updateClub(@PathVariable("id") long id, @RequestBody Club updatedClub) {
        Club existingClub = iClubService.getClubById(id);

        if (existingClub == null) {
            return ResponseEntity.notFound().build();
        }

        existingClub.setNom(updatedClub.getNom());
        existingClub.setDescription(updatedClub.getDescription());

        /*if (updatedClub.getEvents() != null) {
            // Supposons que vous ayez une méthode dans le service EventService pour récupérer un événement par son ID
            Event newEvent = iEventService.getEventById(updatedClub.getEvents().getId());
            existingClub.setEvents(set<iEventService>newEvent);
        }*/

        Club updatedClubEntity = iClubService.updateClub(existingClub);
        return ResponseEntity.ok(updatedClubEntity);
    }


    @PutMapping("/affecter/{club_id}/{event_id}")
    public  Club affecter_club(@PathVariable("club_id")Long id_c,@PathVariable("event_id")Long id){
        Club club=iClubService.affecterclubtoevent(id_c,id);
        return club;
    }

    @GetMapping("/getClubByNom/{nom}")
    public List<Club> getClubsByName(@PathVariable("nom") String nom) {
        List<Club> club = iClubService.getClubsByName(nom);
        return club;
    }
    @GetMapping("/getClubByDescription/{description}")
    public List<Club> getClubsByDescription(@PathVariable("description") String description) {
        List<Club> clubs = iClubService.getClubsByDescription(description);
        return clubs;
    }
    @GetMapping("/getClubsSortedByNom")
    public List<Club> getClubsSortedByNom() {
        return iClubService.getAllClubsSortedByNom();
    }



    @GetMapping("/get-comments/{club-id}")
    public List<Event> getCommentsForError(@PathVariable("club-id") Long id) {
        return iClubService.getAllCommentsForError(id);
    }
}
