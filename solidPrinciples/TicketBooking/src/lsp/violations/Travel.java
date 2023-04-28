package lsp.violations;

public interface Travel {
    public void search(String from, String to);
    public void book(String from, String to);

    public void cancel(String from, String to);
    public void bookFirstClass(String from, String to);


}
