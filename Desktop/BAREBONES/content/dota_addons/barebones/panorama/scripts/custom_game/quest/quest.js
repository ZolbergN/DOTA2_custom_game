function AddDebugQuest(color)
{
	//Make the Panel
	var Panel = $.CreatePanel('Panel', $('#Quests'), '');
	panel.BLoadLayoutSnippet("Quest");
	
	panel.FindChildTraverse('QuestTitle').text = "The siege of Azaroth";
}

function debug()
{
	$.Msg("Debug!");
	AddDebugQuest('red');
}

debug();